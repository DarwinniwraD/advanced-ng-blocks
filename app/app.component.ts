import {Component, OnInit} from '@angular/core';
import {Employee} from './employee';
import {EmpolyeeService} from './employee.service'


@Component({
	selector: 'my-app',
	template: `
	<h2>first app from angular2, the app name is {{name}}</h2>
	<employee-template></employee-template>
	`,
	providers: [EmpolyeeService]
})

export class appComponent {
}