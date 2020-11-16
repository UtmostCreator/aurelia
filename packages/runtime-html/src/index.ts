export {
  Platform,
  TaskQueue,
  Task,
  TaskAbortError,
  TaskQueuePriority,
  TaskStatus,
  QueueTaskOptions,
  ITask,
} from '@aurelia/platform';
export {
  BrowserPlatform,
} from '@aurelia/platform-browser';

export {
  alias,
  registerAliases,

  CallFunctionExpression,
  CustomExpression,
  BindingBehaviorExpression,
  ValueConverterExpression,
  AssignExpression,
  ConditionalExpression,
  AccessThisExpression,
  AccessScopeExpression,
  AccessMemberExpression,
  AccessKeyedExpression,
  CallScopeExpression,
  CallMemberExpression,
  BinaryExpression,
  UnaryExpression,
  PrimitiveLiteralExpression,
  HtmlLiteralExpression,
  ArrayLiteralExpression,
  ObjectLiteralExpression,
  TemplateExpression,
  TaggedTemplateExpression,
  ArrayBindingPattern,
  ObjectBindingPattern,
  BindingIdentifier,
  ForOfStatement,
  Interpolation,
  AnyBindingExpression,
  IsPrimary,
  IsLiteral,
  IsLeftHandSide,
  IsUnary,
  IsBinary,
  IsConditional,
  IsAssign,
  IsValueConverter,
  IsBindingBehavior,
  IsAssignable,
  IsExpression,
  IsExpressionOrStatement,
  IVisitor,
  BinaryOperator,
  BindingIdentifierOrPattern,
  UnaryOperator,
  IExpressionHydrator,

  PropertyBinding,

  CallBinding,

  IPartialConnectableBinding,
  IConnectableBinding,
  connectable,
  BindingMediator,
  MediatedBinding,

  IExpressionParser,
  BindingType,
  parseExpression,
  Char,
  Access,
  Precedence,
  parse,
  ParserState,

  ContentBinding,
  InterpolationBinding,

  LetBinding,

  RefBinding,

  ArrayObserver,
  ArrayIndexObserver,
  enableArrayObservation,
  disableArrayObservation,
  applyMutationsToIndices,
  synchronizeIndices,

  MapObserver,
  enableMapObservation,
  disableMapObservation,

  SetObserver,
  enableSetObservation,
  disableSetObservation,

  BindingContext,
  Scope,
  OverrideContext,

  CollectionLengthObserver,

  CollectionSizeObserver,

  ComputedOverrides,
  ComputedLookup,
  computed,
  createComputedObserver,
  CustomSetterObserver,
  GetterObserver,

  IDirtyChecker,
  DirtyCheckProperty,
  DirtyCheckSettings,

  IObservableDefinition,
  observable,

  IObjectObservationAdapter,
  IObserverLocator,
  INodeObserverLocator,
  getCollectionObserver,
  ObserverLocator,

  PrimitiveObserver,

  PropertyAccessor,

  BindableObserver,

  SetterObserver,

  ISignaler,

  subscriberCollection,
  collectionSubscriberCollection,

  bindingBehavior,
  BindingBehavior,
  BindingBehaviorDefinition,
  PartialBindingBehaviorDefinition,
  BindingBehaviorKind,
  BindingBehaviorDecorator,
  BindingBehaviorInstance,
  BindingBehaviorType,
  BindingInterceptor,
  BindingBehaviorFactory,
  BindingBehaviorStrategy,
  IInterceptableBinding,

  BindingModeBehavior,
  OneTimeBindingBehavior,
  ToViewBindingBehavior,
  FromViewBindingBehavior,
  TwoWayBindingBehavior,

  DebounceBindingBehavior,

  SignalBindingBehavior,

  ThrottleBindingBehavior,

  ValueConverter,
  ValueConverterDefinition,
  PartialValueConverterDefinition,
  ValueConverterKind,
  ValueConverterDecorator,
  ValueConverterInstance,
  ValueConverterType,
  valueConverter,

  bindable,
  PartialBindableDefinition,
  BindableDefinition,
  Bindable,

  DebounceBindingBehaviorRegistration,
  OneTimeBindingBehaviorRegistration,
  ToViewBindingBehaviorRegistration,
  FromViewBindingBehaviorRegistration,
  SignalBindingBehaviorRegistration,
  ThrottleBindingBehaviorRegistration,
  TwoWayBindingBehaviorRegistration,

  BindingMode,
  ExpressionKind,
  LifecycleFlags,

  IBinding,
  ILifecycle,

  AccessorOrObserver,
  AccessorType,
  Collection,
  CollectionKind,
  DelegationStrategy,
  IAccessor,
  IBindingContext,
  IBindingTargetAccessor,
  IBindingTargetObserver,
  ICollectionChangeTracker,
  ICollectionObserver,
  ICollectionIndexObserver,
  ICollectionSubscriber,
  IndexMap,
  IBatchable,
  IObservable,
  IObservedArray,
  IObservedMap,
  IObservedSet,
  IOverrideContext,
  IPropertyChangeTracker,
  IPropertyObserver,
  ISubscribable,
  ISubscriberCollection,
  ObservedCollection,
  PropertyObserver,
  CollectionObserver,
  ICollectionSubscriberCollection,
  ICollectionSubscribable,
  ISubscriber,
  isIndexMap,
  copyIndexMap,
  cloneIndexMap,
  createIndexMap,
} from '@aurelia/runtime';

export {
  Aurelia,
  IAurelia,
} from './aurelia.js';
export {
  ISinglePageApp,
  AppRoot,
  IAppRoot,
} from './app-root.js';
export {
  TaskSlot,
  AppTask,
  IAppTask,
} from './app-task.js';
export {
  AttrSyntax,
  IAttributeParser,
  attributePattern,
  AttributePatternDefinition,
  IAttributePattern,
  AttributePattern,
  Interpretation,
  ISyntaxInterpreter,
  AtPrefixedTriggerAttributePattern,
  ColonPrefixedBindAttributePattern,
  DotSeparatedAttributePattern,
  RefAttributePattern,
} from './resources/attribute-pattern.js';
export {
  bindingCommand,
  BindingCommand ,
  BindingCommandInstance,
  BindingCommandDefinition,
  BindingCommandKind,
  BindingCommandType,
  getTarget,
  CallBindingCommand,
  DefaultBindingCommand,
  ForBindingCommand,
  FromViewBindingCommand,
  OneTimeBindingCommand,
  ToViewBindingCommand,
  TwoWayBindingCommand,
  TriggerBindingCommand,
  DelegateBindingCommand,
  CaptureBindingCommand,
  AttrBindingCommand,
  ClassBindingCommand,
  StyleBindingCommand,
} from './resources/binding-command.js';
export {
  IAttrSyntaxTransformer
} from './attribute-syntax-transformer.js';
export {
  Listener
} from './binding/listener.js';
export {
  AttributeBinding
} from './binding/attribute.js';

export {
  IRenderer,
  IInstructionTypeClassifier,
  ITemplateCompiler,
  renderer,
  CallBindingInstruction,
  HydrateAttributeInstruction,
  HydrateElementInstruction,
  HydrateTemplateController,
  InterpolationInstruction,
  IteratorBindingInstruction,
  LetBindingInstruction,
  HydrateLetElementInstruction,
  RefBindingInstruction,
  SetPropertyInstruction,
  AttributeBindingInstruction,
  ListenerBindingInstruction,
  PropertyBindingInstruction,
  SetAttributeInstruction,
  SetClassAttributeInstruction,
  SetStyleAttributeInstruction,
  StylePropertyBindingInstruction,
  TextBindingInstruction,
  AttributeInstruction,
  InstructionRow,
  isInstruction,
  NodeInstruction,
  InstructionTypeName,
  Instruction,
  IInstruction,
  InstructionType,
} from './renderer.js';

export {
  AttributeNSAccessor,
} from './observation/attribute-ns-accessor.js';
export {
  IInputElement,
  CheckedObserver,
} from './observation/checked-observer.js';
export {
  ClassAttributeAccessor,
} from './observation/class-attribute-accessor.js';
export {
  DataAttributeAccessor,
} from './observation/data-attribute-accessor.js';
export {
  ElementPropertyAccessor,
} from './observation/element-property-accessor.js';
export {
  IEventDelegator,
  EventSubscriber,
  EventDelegator,
} from './observation/event-delegator.js';
export {
  NodeObserverConfig,
  NodeObserverLocator,
  INodeObserverConfig,
  IHtmlObserverConstructor,
} from './observation/observer-locator.js';
export {
  ISelectElement,
  IOptionElement,
  SelectValueObserver
} from './observation/select-value-observer.js';
export {
  StyleAttributeAccessor
} from './observation/style-attribute-accessor.js';
export {
  ISVGAnalyzer,
  SVGAnalyzer,
  NoopSVGAnalyzer,
} from './observation/svg-analyzer.js';
export {
  ValueAttributeObserver,
} from './observation/value-attribute-observer.js';

export {
  AttrBindingBehavior,
} from './resources/binding-behaviors/attr.js';
export {
  SelfableBinding,
  SelfBindingBehavior,
} from './resources/binding-behaviors/self.js';
export {
  UpdateTriggerBindingBehavior,
  UpdateTriggerableBinding,
  UpdateTriggerableObserver,
} from './resources/binding-behaviors/update-trigger.js';

export {
  customAttribute,
  CustomAttributeDecorator,
  CustomAttribute,
  CustomAttributeDefinition,
  CustomAttributeKind,
  CustomAttributeType,
  PartialCustomAttributeDefinition,
  templateController,
} from './resources/custom-attribute.js';
export {
  FrequentMutations,
  ObserveShallow,
} from './resources/template-controllers/flags.js';
export {
  If,
  Else,
} from './resources/template-controllers/if.js';
export {
  Repeat
} from './resources/template-controllers/repeat.js';
export {
  With
} from './resources/template-controllers/with.js';
export {
  Switch,
  Case,
  DefaultCase,
} from './resources/template-controllers/switch.js';

export {
  Blur,
  BlurManager,
} from './resources/custom-attributes/blur.js';

export {
  Focus,
} from './resources/custom-attributes/focus.js';

export {
  Portal,
  PortalTarget,
  PortalLifecycleCallback,
} from './resources/template-controllers/portal.js';

export {
  AuSlot,
  IProjections,
  SlotInfo,
  AuSlotContentType,
  RegisteredProjections,
  IProjectionProvider,
  ProjectionContext,
} from './resources/custom-elements/au-slot.js';

export {
  containerless,
  customElement,
  CustomElement,
  CustomElementDecorator,
  CustomElementKind,
  CustomElementType,
  CustomElementDefinition,
  PartialCustomElementDefinition,
  useShadowDOM,
} from './resources/custom-element.js';

export {
  Subject,
  Compose,
} from './resources/custom-elements/compose.js';
export {
  ISanitizer,
  SanitizeValueConverter,
} from './resources/value-converters/sanitize.js';
export {
  ViewValueConverter,
} from './resources/value-converters/view.js';

export {
  ITemplateCompilerRegistration,
  INodeObserverLocatorRegistration,

  DefaultComponents,

  RefAttributePatternRegistration,
  DotSeparatedAttributePatternRegistration,

  DefaultBindingSyntax,

  AtPrefixedTriggerAttributePatternRegistration,
  ColonPrefixedBindAttributePatternRegistration,

  ShortHandBindingSyntax,

  SVGAnalyzerRegistration,

  CallBindingCommandRegistration,
  DefaultBindingCommandRegistration,
  ForBindingCommandRegistration,
  RefBindingCommandRegistration,
  FromViewBindingCommandRegistration,
  OneTimeBindingCommandRegistration,
  ToViewBindingCommandRegistration,
  TwoWayBindingCommandRegistration,
  TriggerBindingCommandRegistration,
  DelegateBindingCommandRegistration,
  CaptureBindingCommandRegistration,
  AttrBindingCommandRegistration,
  ClassBindingCommandRegistration,
  StyleBindingCommandRegistration,

  DefaultBindingLanguage,

  ViewValueConverterRegistration,
  SanitizeValueConverterRegistration,
  IfRegistration,
  ElseRegistration,
  RepeatRegistration,
  WithRegistration,
  AttrBindingBehaviorRegistration,
  SelfBindingBehaviorRegistration,
  UpdateTriggerBindingBehaviorRegistration,
  ComposeRegistration,

  DefaultResources,

  AttributeBindingRendererRegistration,
  ListenerBindingRendererRegistration,
  SetAttributeRendererRegistration,
  SetClassAttributeRendererRegistration,
  SetStyleAttributeRendererRegistration,
  StylePropertyBindingRendererRegistration,
  TextBindingRendererRegistration,

  RefBindingRendererRegistration,
  CallBindingRendererRegistration,
  CustomAttributeRendererRegistration,
  CustomElementRendererRegistration,
  InterpolationBindingRendererRegistration,
  IteratorBindingRendererRegistration,
  LetElementRendererRegistration,
  PropertyBindingRendererRegistration,
  SetPropertyRendererRegistration,
  TemplateControllerRendererRegistration,

  DefaultRenderers,

  StandardConfiguration
} from './configuration.js';
export {
  TemplateBinder,
} from './template-binder.js';
export {
  ITemplateElementFactory
} from './template-element-factory.js';

export {
  PartialChildrenDefinition,
  ChildrenDefinition,
  Children,
  children,
  ChildrenObserver,
} from './templating/children.js';

// These exports are temporary until we have a proper way to unit test them
export {
  Controller,
  isCustomElementController,
  isCustomElementViewModel,
  ViewModelKind,
  ControllerVisitor,
  IViewModel,
  IController,
  IComponentController,
  IContextualCustomElementController,
  IHydratableController,
  IDryCustomElementController,
  ICustomAttributeController,
  IHydratedController,
  IHydratedComponentController,
  IHydratedParentController,
  ICompiledCustomElementController,
  ICustomElementController,
  ICustomElementViewModel,
  ICustomAttributeViewModel,
  IHydratedCustomElementViewModel,
  IHydratedCustomAttributeViewModel,
  ISyntheticView,
} from './templating/controller.js';
export {
  getRenderContext,
  isRenderContext,
  IRenderContext,
  ICompiledRenderContext,
  IComponentFactory,
} from './templating/render-context.js';
export {
  ViewFactory,
  IViewFactory,
  IViewLocator,
  ViewLocator,
  view,
  Views,
} from './templating/view.js';
export {
  createElement,
  RenderPlan
} from './create-element.js';
export {
  INode,
  IEventTarget,
  IRenderLocation,
  INodeSequence,
  NodeType,
  FragmentNodeSequence,
  IHistory,
  IWindow,
  ILocation,
  getEffectiveParentNode,
  setEffectiveParentNode,
  convertToRenderLocation,
  isRenderLocation,
} from './dom.js';
export {
  IPlatform,
} from './platform.js';

export {
  BindableInfo,
  ElementInfo,
  AttrInfo,
  AnySymbol,
  BindingSymbol,
  CustomAttributeSymbol,
  CustomElementSymbol,
  ElementSymbol,
  LetElementSymbol,
  NodeSymbol,
  ParentNodeSymbol,
  PlainAttributeSymbol,
  PlainElementSymbol,
  ResourceAttributeSymbol,
  SymbolFlags,
  SymbolWithBindings,
  SymbolWithMarker,
  SymbolWithTemplate,
  TemplateControllerSymbol,
  TextSymbol,
  ProjectionSymbol,
} from './semantic-model.js';

export {
  CSSModulesProcessorRegistry,
  cssModules,
  ShadowDOMRegistry,
  IShadowDOMStyleFactory,
  shadowCSS,
  StyleConfiguration,
  IShadowDOMConfiguration,
  AdoptedStyleSheetsStyles,
  StyleElementStyles,
  IShadowDOMStyles,
  IShadowDOMGlobalStyles,
} from './templating/styles.js';
