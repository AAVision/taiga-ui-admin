import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiScrollbarModule } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbars',
  standalone: true,
  imports: [
    CommonModule, TuiLinkModule, TuiScrollbarModule
  ],
  templateUrl: './scrollbars.component.html',
  styleUrls: ['./scrollbars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarsComponent {

}
