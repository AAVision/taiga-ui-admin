import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [
    CommonModule, TuiAvatarModule, GoToComponent
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

  readonly aavision = 'https://avatars.githubusercontent.com/u/75311052?s=400&u=8ab7537f208eef286a644cd19466cfd92b1edda7&v=4';

}
