import {Injectable} from "@angular/core";

import {Employee} from './employee';

import {EMPLOYEES} from './mock-employee';

@Injectable()

export class EmpolyeeService {
	getEmployee(): Promise<Employee[]>{
		return Promise.resolve(EMPLOYEES);
	}
}