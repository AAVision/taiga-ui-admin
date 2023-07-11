import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';
import { RouterModule } from '@angular/router';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule, TuiButtonModule, RouterModule,
    TuiLoaderModule, TuiSvgModule, TuiAvatarModule,
    TuiAutoFocusModule, TuiBadgeModule, GoToComponent
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  readonly avatarUrl = `https://taiga-ui.dev/assets/images/avatar.jpg`;

  loader =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/></svg>';

  constructor(@Inject(TUI_IS_CYPRESS) readonly isCypress: boolean) { }

  onClick(event: MouseEvent): void {
    console.info('click ', this.avatarUrl, event);
  }
}
