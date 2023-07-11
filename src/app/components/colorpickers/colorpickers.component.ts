import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiColorEditModule, TuiColorPickerModule, TuiColorSelectorModule, TuiInputColorModule, TuiPaletteModule, defaultEditorColors } from '@taiga-ui/addon-editor';
import { TuiButtonModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-colorpickers',
  standalone: true,
  imports: [
    CommonModule, TuiTextfieldControllerModule, TuiPaletteModule,
    FormsModule, TuiColorEditModule, TuiInputModule,
    TuiColorPickerModule, TuiInputColorModule, TuiColorSelectorModule,
    TuiSvgModule, TuiHostedDropdownModule, TuiActiveZoneModule,
    TuiButtonModule, GoToComponent
  ],
  templateUrl: './colorpickers.component.html',
  styleUrls: ['./colorpickers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorpickersComponent {
  color = '#ffdd2d';

  readonly palette1 = defaultEditorColors;

  color2 = '#ffdd2d';

  constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) { }

  get background(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.color2);
  }

  colors3 = new Map([
    ['red', 'var(--tui-error-fill)'],
    ['green', 'var(--tui-success-fill)'],
    ['blue', 'var(--tui-info-fill)'],
  ]);

  color$ = new BehaviorSubject('var(--tui-success-fill)');

  updateColor(color: string): void {
    this.color$.next(color);
  }

}
