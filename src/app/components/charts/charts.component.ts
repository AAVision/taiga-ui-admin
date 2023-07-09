import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiPieChartModule } from '@taiga-ui/addon-charts';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiHintModule } from '@taiga-ui/core';
import { TuiRingChartModule } from '@taiga-ui/addon-charts';
import { tuiSum } from '@taiga-ui/cdk';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CommonModule, TuiPieChartModule, TuiMoneyModule,
    TuiHintModule, TuiRingChartModule

  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent {

  /**   PIE CHART  */
  readonly value1 = [40, 30, 20, 10];


  readonly value2 = [13769, 12367, 10172, 3018, 2592];
  readonly labels2 = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
  /**   ***********************************************  */

  /**   PIE CHART  */
  private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];
  readonly value = [13769, 12367, 10172, 3018, 2592];
  readonly total = tuiSum(...this.value);

  index = NaN;

  get sum(): number {
    return Number.isNaN(this.index) ? this.total : this.value[this.index];
  }

  get label(): string {
    return Number.isNaN(this.index) ? 'Total' : this.labels[this.index];
  }
  /**   ***********************************************  */

}
