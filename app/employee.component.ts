import {Component, Input, OnInit} from "@angular/core";
import {Employee} from './employee';
import {EmpolyeeService} from './employee.service'

@Component({
	selector: "employee-template",
	template: `
		<h1>{{title}}</h1>
		<h2>Employee List</h2>
		<ul>
			<li *ngFor="let emp of employees" [class.selected]="emp === selectedEmloyee" (click)="onSelect(emp)" >{{emp_name}}</li>
		</ul>
		<div *ngIf="emp">
			<h2>{{emp.emp_name}} Detaile!</h2>
			<label>Empolyee Name</label><input [(ngModel)]="emp.emp_name" type="text" placeholder="name" />
		</div>
	`
})

export class EmplolyeeComponent implements OnInit {
	name = "ngAPP";
	employees:Employee[];

	selectedEmloyee: Employee;

	constructor(private emplService: EmpolyeeService){}

	getEmployee():void {
		this.emplService.getEmployee().then(employees => this.employees = employees);
	}

	ngOnInit(): void {
		this.getEmployee();
	}

	onSelect(emp: Employee):void {
		this.selectedEmloyee = emp;
	}
}