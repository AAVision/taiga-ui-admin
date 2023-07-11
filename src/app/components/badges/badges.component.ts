import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiBadgedContentModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [
    CommonModule, TuiBadgeModule, TuiBadgedContentModule,
    TuiSvgModule, TuiAvatarModule, GoToComponent
  ],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {

}
