import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'app-money',
  standalone: true,
  imports: [
    CommonModule, TuiMoneyModule, TuiLinkModule
  ],
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MoneyComponent {

}
