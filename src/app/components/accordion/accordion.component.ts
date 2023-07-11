import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule, TuiAccordionModule, GoToComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AccordionComponent {

}
