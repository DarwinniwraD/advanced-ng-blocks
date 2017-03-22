"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmplolyeeComponent = (function () {
    function EmplolyeeComponent(emplService) {
        this.emplService = emplService;
        this.name = "ngAPP";
    }
    EmplolyeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this.emplService.getEmployee().then(function (employees) { return _this.employees = employees; });
    };
    EmplolyeeComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EmplolyeeComponent.prototype.onSelect = function (emp) {
        this.selectedEmloyee = emp;
    };
    return EmplolyeeComponent;
}());
EmplolyeeComponent = __decorate([
    core_1.Component({
        selector: "employee-template",
        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>Employee List</h2>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let emp of employees\" [class.selected]=\"emp === selectedEmloyee\" (click)=\"onSelect(emp)\" >{{emp_name}}</li>\n\t\t</ul>\n\t\t<div *ngIf=\"emp\">\n\t\t\t<h2>{{emp.emp_name}} Detaile!</h2>\n\t\t\t<label>Empolyee Name</label><input [(ngModel)]=\"emp.emp_name\" type=\"text\" placeholder=\"name\" />\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmpolyeeService])
], EmplolyeeComponent);
exports.EmplolyeeComponent = EmplolyeeComponent;
//# sourceMappingURL=employee.component.js.map