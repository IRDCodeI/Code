import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// platformBrowserDynamic(): Cargo de angular
// bootstrapModule(AppModule): Carga del modulo principal de angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
