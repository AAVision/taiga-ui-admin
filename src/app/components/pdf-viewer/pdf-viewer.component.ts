import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiPdfViewerModule, TuiPdfViewerOptions, TuiPdfViewerService } from '@taiga-ui/kit';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [
    CommonModule, TuiPdfViewerModule, TuiNotificationModule,
    TuiButtonModule, GoToComponent
  ],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfViewerComponent {
  private readonly pdf = 'assets/pdf/taiga.pdf';

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
  ) { }

  /**
   * @description:
   * Embedded PDFs in mobile doesn't work,
   * so you can use third-party services
   * or your own service to render PDF in mobile iframe
   */
  show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
    this.pdfService
      .open(
        this.sanitizer.bypassSecurityTrustResourceUrl(
          this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`
            : this.pdf,
        ),
        {
          label: 'Taiga UI',
          actions,
        },
      )
      .subscribe();
  }
}
