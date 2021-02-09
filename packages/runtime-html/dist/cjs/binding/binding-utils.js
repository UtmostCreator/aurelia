"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindingTargetSubscriber = void 0;
/**
 * A subscriber that is used for subcribing to target observer & invoking `updateSource` on a binding
 */
class BindingTargetSubscriber {
    constructor(b) {
        this.b = b;
    }
    // deepscan-disable-next-line
    handleChange(value, _, flags) {
        const b = this.b;
        if (value !== b.sourceExpression.evaluate(flags, b.$scope, b.$hostScope, b.locator, null)) {
            b.updateSource(value, flags);
        }
    }
}
exports.BindingTargetSubscriber = BindingTargetSubscriber;
//# sourceMappingURL=binding-utils.js.map