import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [appRoutingProviders, provideHttpClient(withFetch())], // Provide the routes here
}).catch((err) => console.error(err));
