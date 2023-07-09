import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAxesModule } from '@taiga-ui/addon-charts';
import { tuiCeil, tuiSum } from '@taiga-ui/cdk';
import { TuiBarModule } from '@taiga-ui/addon-charts';
import { TuiBarChartModule } from '@taiga-ui/addon-charts';
import { TuiHintModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiLegendItemModule } from '@taiga-ui/addon-charts';
import { TuiRingChartModule } from '@taiga-ui/addon-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule, TuiAxesModule, TuiBarModule,
    TuiBarChartModule, TuiHintModule, TuiMoneyModule,
    TuiLegendItemModule, TuiRingChartModule
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent {
  readonly value = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
  ];

  readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
  readonly labelsY = ['0', '10 000'];

  getHeight(max: number): number {
    return (max / tuiCeil(max, -3)) * 100;
  }

  activeItemIndex = NaN;

  readonly value2 = [13769, 12367, 10172, 3018, 2592];
  readonly sum = tuiSum(...this.value2);
  readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

  isItemActive(index: number): boolean {
    return this.activeItemIndex === index;
  }

  onHover(index: number, hovered: boolean): void {
    this.activeItemIndex = hovered ? index : 0;
  }

  getColor(index: number): string {
    return `var(--tui-chart-${index})`;
  }
}
