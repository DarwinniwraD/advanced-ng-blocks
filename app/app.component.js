"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var appComponent = (function () {
    function appComponent() {
    }
    return appComponent;
}());
appComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h2>first app from angular2, the app name is {{name}}</h2>\n\t<employee-template></employee-template>\n\t",
        providers: [employee_service_1.EmpolyeeService]
    })
], appComponent);
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map