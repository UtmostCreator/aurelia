import { valueConverter } from '@aurelia/runtime';
import { I18N } from '../i18n.js';
import { Signals, ValueConverters } from '../utils.js';

@valueConverter(ValueConverters.relativeTimeValueConverterName)
export class RelativeTimeValueConverter {
  public readonly signals: string[] = [Signals.I18N_SIGNAL, Signals.RT_SIGNAL];

  public constructor(
    @I18N private readonly i18n: I18N,
  ) {}

  public toView(value: unknown, options?: Intl.RelativeTimeFormatOptions, locale?: string) {

    if (!(value instanceof Date)) {
      return value;
    }

    return this.i18n.rt(value, options, locale);
  }
}
