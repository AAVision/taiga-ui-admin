import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiBadgedContentModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [
    CommonModule, TuiBadgeModule, TuiBadgedContentModule,
    TuiSvgModule, TuiAvatarModule
  ],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {

}
