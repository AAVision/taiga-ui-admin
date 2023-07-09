import { ChangeDetectionStrategy, Component, Inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiDialogContext, TuiDialogModule, TuiDialogService, TuiRootModule } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiDropdownPortalService, tuiClamp } from '@taiga-ui/cdk';
import { TuiDialogFormService, TuiInputModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiElasticStickyModule } from '@taiga-ui/addon-mobile';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';
import { TuiLinkModule } from '@taiga-ui/core';


@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [
    CommonModule, TuiDialogModule, TuiRootModule,
    TuiButtonModule, TuiMoneyModule, TuiMarkerIconModule,
    TuiElasticStickyModule, TuiScrollbarModule, TuiInputModule,
    FormsModule, TuiLinkModule
  ],
  providers: [TuiDialogFormService],
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent {

  money = 1000;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogService) private readonly dialogs2: TuiDialogService,
    @Inject(TuiDialogService) private readonly dialogs3: TuiDialogService,
    @Inject(TuiDropdownPortalService) private readonly portalService: TuiDropdownPortalService,
    @Inject(TuiDialogFormService) private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs4: TuiDialogService,
  ) { }

  /**********************************   Dialog 1    **************************/
  showDialog(): void {
    this.dialogs
      .open(
        '<div>This is a plain string dialog.</div>It supports basic <strong>HTML</strong>',
        { label: 'Heading', size: 's' },
      )
      .subscribe();
  }

  showDialogWithCustomButton(): void {
    this.dialogs
      .open('Good, Anakin, Good!', {
        label: 'Star wars. Episode III',
        size: 's',
        data: { button: 'Do it!' },
      })
      .subscribe();
  }

  /*******************************************************************************/


  /**********************************   Dialog 2    **************************/

  showDialog2(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs2.open(content).subscribe();
  }

  withdraw(): void {
    this.money -= 100;
  }

  /*******************************************************************************/

  /**********************************   Dialog 3    **************************/

  filters = false;

  scale = 1;

  get transform(): string {
    return `scale(${this.scale})`;
  }

  get width(): string {
    return `calc((100% + 4rem) * ${1 / this.scale})`;
  }

  onElastic(value: number): void {
    this.scale = tuiClamp(value, 0.5, 1);
  }

  onFilterClick(): void {
    this.filters = true;
    this.dialogs3.open('Dialog with filters').subscribe({
      complete: () => {
        this.filters = false;
      },
    });
  }

  showDialog3(
    content: PolymorpheusContent,
    button: TemplateRef<Record<string, unknown>>,
  ): void {
    const templateRef = this.portalService.addTemplate(button);

    this.dialogs3.open(content).subscribe({
      complete: () => {
        this.portalService.removeTemplate(templateRef);
      },
    });
  }

  /*******************************************************************************/

  /**********************************   Dialog 4    **************************/

  value = '';
  onModelChange(value: string): void {
    this.value = value;
    this.dialogForm.markAsDirty();
  }

  onClick(content: PolymorpheusContent): void {
    const closeable = this.dialogForm.withPrompt({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs4.open(content, { closeable, dismissible: closeable }).subscribe({
      complete: () => {
        this.value = '';
        this.dialogForm.markAsPristine();
      },
    });
  }

  /*******************************************************************************/
}
