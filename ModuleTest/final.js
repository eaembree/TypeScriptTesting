var Base;
(function (Base) {
    var BaseClass = (function () {
        function BaseClass() {
        }
        BaseClass.prototype.print = function () {
            alert(name + "is a BaseClass");
        };
        return BaseClass;
    })();
    Base.BaseClass = BaseClass;
})(Base || (Base = {}));
/// <reference path="../Base/base.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Child;
(function (Child) {
    var ChildClass = (function (_super) {
        __extends(ChildClass, _super);
        function ChildClass() {
            _super.apply(this, arguments);
        }
        ChildClass.prototype.print = function () {
            alert(name + "is a ChildClass");
        };
        return ChildClass;
    })(Base.BaseClass);
    Child.ChildClass = ChildClass;
})(Child || (Child = {}));
/// <reference path="../Child/child.ts" />
(new Child.ChildClass()).print();
(new Base.BaseClass()).print();
//# sourceMappingURL=final.js.map