"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
;
var EMPLOYEES = [
    { emp_name: 'A', emp_des: '1221' },
    { emp_name: 'B', emp_des: '1222' },
    { emp_name: 'C', emp_des: '1233' },
    { emp_name: 'D', emp_des: '1234' },
    { emp_name: 'E', emp_des: '1235' },
    { emp_name: 'F', emp_des: '1236' },
    { emp_name: 'G', emp_des: '1238' },
];
var appComponent = (function () {
    function appComponent() {
        this.name = "ngAPP";
        this.employees = EMPLOYEES;
    }
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map