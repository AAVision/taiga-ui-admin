import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAccordionModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule, TuiAccordionModule
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AccordionComponent {

}
