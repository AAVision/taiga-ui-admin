import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiCarouselModule, TuiIslandModule, TuiMarkerIconModule, TuiPaginationModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiButtonModule, TuiDialogModule, TuiLoaderModule } from '@taiga-ui/core';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-carousels',
  standalone: true,
  imports: [
    CommonModule, TuiCarouselModule, TuiIslandModule,
    TuiPaginationModule, TuiMoneyModule, TuiLoaderModule,
    TuiMarkerIconModule, TuiButtonModule, TuiDialogModule,
    GoToComponent
  ],
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CarouselsComponent {

  open = false;

  index2 = 0;

  get background(): string {
    switch (this.index2) {
      case 0:
        return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
      case 1:
        return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
      default:
        return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
    }
  }

  onClick(): void {
    this.index2 = 0;
    this.open = true;
  }

  navigate(delta: number): void {
    this.index2 = (this.index2 + delta) % 3;
  }

}
