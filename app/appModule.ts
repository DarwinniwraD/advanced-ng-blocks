import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {appComponent} from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [appComponent],
	bootstrap: [appComponent]
})

export class AppModule {}