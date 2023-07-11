import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiCardModule, TuiPaymentSystem } from '@taiga-ui/addon-commerce';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule, TuiCardModule, GoToComponent
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CardsComponent {

  readonly paymentSystem: TuiPaymentSystem = 'mir';
  readonly brandLogo = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

}
