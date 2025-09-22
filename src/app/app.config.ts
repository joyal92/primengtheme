import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './my-preset';
import { routes } from './app.routes';
import myPreset from './my-presets';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    // providePrimeNG({
    //     theme: {
    //         preset: MyPreset,
    //         options: {
    //             cssLayer: {
    //                 name: 'primeng',
    //                 order: 'primeng, app-styles'
    //             }
    //         }
    //     }
    // })
    providePrimeNG({
      theme: {
        preset: myPreset,
        // Optional: Add other theme configurations
      },
    }),
  ]
};