import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-scrollbars',
  standalone: true,
  imports: [
    CommonModule, TuiLinkModule, TuiScrollbarModule,
    GoToComponent
  ],
  templateUrl: './scrollbars.component.html',
  styleUrls: ['./scrollbars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarsComponent {

}
