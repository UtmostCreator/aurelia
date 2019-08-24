import { AttrSyntax } from '@aurelia/jit';
import { IContainer, IResolver, Registration } from '@aurelia/kernel';
import { IAttrSyntaxTransformer } from './attribute-syntax-transformer';

export class HtmlAttrSyntaxTransformer implements IAttrSyntaxTransformer {

  public static register(container: IContainer): IResolver<IAttrSyntaxTransformer> {
    return Registration.singleton(IAttrSyntaxTransformer, this).register(container);
  }

  public transform(node: HTMLElement, attrSyntax: AttrSyntax): void {
    if (attrSyntax.command === 'bind' && shouldDefaultToTwoWay(node, attrSyntax)) {
      attrSyntax.command = 'two-way';
    }
    attrSyntax.target = this.map(node.tagName, attrSyntax.target);
  }

  public map(tagName: string, attr: string): string {
    switch (tagName) {
      case 'LABEL':
        switch (attr) {
          case 'for':
            return 'htmlFor';
          default:
            return attr;
        }
      case 'IMG':
        switch (attr) {
          case 'usemap':
            return 'useMap';
          default:
            return attr;
        }
      case 'INPUT':
        switch (attr) {
          case 'maxlength':
            return 'maxLength';
          case 'minlength':
            return 'minLength';
          case 'formaction':
            return 'formAction';
          case 'formenctype':
            return 'formEncType';
          case 'formmethod':
            return 'formMethod';
          case 'formnovalidate':
            return 'formNoValidate';
          case 'formtarget':
            return 'formTarget';
          default:
            return attr;
        }
      case 'TEXTAREA':
        switch (attr) {
          case 'maxlength':
            return 'maxLength';
          default:
            return attr;
        }
      case 'TD':
      case 'TH':
        switch (attr) {
          case 'rowspan':
            return 'rowSpan';
          case 'colspan':
            return 'colSpan';
          default:
            return attr;
        }
      default:
        switch (attr) {
          case 'accesskey':
            return 'accessKey';
          case 'contenteditable':
            return 'contentEditable';
          case 'tabindex':
            return 'tabIndex';
          case 'textcontent':
            return 'textContent';
          case 'innerhtml':
            return 'innerHTML';
          case 'scrolltop':
            return 'scrollTop';
          case 'scrollleft':
            return 'scrollLeft';
          case 'readonly':
            return 'readOnly';
          default:
            return attr;
        }
    }
  }

  private transformBindingCommand(element: HTMLElement, attrSyntax: AttrSyntax): void {
    const tagName = element.tagName;
    const target = attrSyntax.target;
    let command = attrSyntax.command;
    if (tagName === 'INPUT') {
      const inputType = (element as HTMLInputElement).type;
      if ((target === 'value' || target === 'files') && inputType !== 'checkbox' && inputType !== 'radio'
        || target === 'checked' && (inputType === 'checkbox' || inputType === 'radio')) {
        command = 'two-way';
      }
    }
    else if ((tagName === 'TEXTAREA' || tagName === 'SELECT') && target === 'value'
      || (target === 'textcontent' || target === 'innerhtml') && element.hasAttribute('contenteditable')
      || target === 'scrolltop'
      || target === 'scrollleft') {
      command = 'two-way';
    }
    attrSyntax.command = command;
  }
}

function shouldDefaultToTwoWay(element: HTMLElement, attr: AttrSyntax): boolean {
  switch (element.tagName) {
    case 'INPUT':
      switch ((element as HTMLInputElement).type) {
        case 'checkbox':
        case 'radio':
          return attr.target === 'checked';
        default:
          return attr.target === 'value' || attr.target === 'files';
      }
    case 'TEXTAREA':
    case 'SELECT':
      return attr.target === 'value';
    default:
      switch (attr.target) {
        case 'textcontent':
        case 'innerhtml':
          return element.hasAttribute('contenteditable');
        case 'scrolltop':
        case 'scrolleft':
          return true;
        default:
          return false;
      }
  }
}
