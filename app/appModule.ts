import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {appComponent} from './app.component';
import {EmplolyeeComponent} from './employee.component';
import {EmpolyeeService} from './employee.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [appComponent, EmplolyeeComponent],
	bootstrap: [appComponent],
	providers: [EmpolyeeService]
})

export class AppModule {}