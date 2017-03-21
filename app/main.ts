import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {appComponent} from "./app.component";
import {AppModule} from "./appModule";

platformBrowserDynamic().bootstrapModule(appComponent);