import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-money',
  standalone: true,
  imports: [
    CommonModule, TuiMoneyModule,
    GoToComponent
  ],
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MoneyComponent {

}
