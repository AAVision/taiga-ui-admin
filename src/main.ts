import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      RouterModule,
      RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'top'
      }),

      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
    ),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
  ]
}).catch((err) => {
  console.error(err);
})

