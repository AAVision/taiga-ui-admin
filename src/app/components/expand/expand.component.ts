import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiExpandModule } from '@taiga-ui/core';

@Component({
  selector: 'app-expand',
  standalone: true,
  imports: [
    CommonModule, TuiExpandModule, TuiButtonModule
  ],
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ExpandComponent {
  expanded = false;

  subpages = ['page1', 'page2', 'page3'];

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
