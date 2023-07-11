import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiLoaderModule, tuiLoaderOptionsProvider } from '@taiga-ui/core';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-loaders',
  standalone: true,
  imports: [
    CommonModule, TuiLoaderModule, TuiButtonModule,
    GoToComponent
  ],
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
  ],
})
export class LoadersComponent {

}
