import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h2>first app from angular2, the app name is {{name}}</h2>
	<label for="name">Two way binding</label>
	<input type="text" [(ngModel)]="inputTxt" />
	<p>{{inputTxt}}</p>
	<ul>
		<li *ngFor="let emp of employees">{{emp.emp_name}} is from {{emp.emp_des}}</li>
	</ul>
	`
});

export class Employee {
	emp_name: string;
	emp_des: string;
};

const EMPLOYEES: Employee[] = [
	{emp_name: 'A', emp_des : '1221'},
	{emp_name: 'B', emp_des : '1222'},
	{emp_name: 'C', emp_des : '1233'},
	{emp_name: 'D', emp_des : '1234'},
	{emp_name: 'E', emp_des : '1235'},
	{emp_name: 'F', emp_des : '1236'},
	{emp_name: 'G', emp_des : '1238'},
];

export class appComponent {
	name = "ngAPP";
	employees = EMPLOYEES;
}