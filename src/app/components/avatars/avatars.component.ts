import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [
    CommonModule, TuiAvatarModule
  ],
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarsComponent {

  avatar = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

  readonly users = [
    'Alpacino',
    'Bob De Niro',
    'Joe Pesci',
  ];

  readonly waterplea = 'https://avatars.githubusercontent.com/u/11832552?v=4';

}
