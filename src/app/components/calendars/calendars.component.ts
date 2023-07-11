import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiCalendarRangeModule } from '@taiga-ui/kit';
import { TuiCalendarMonthModule } from '@taiga-ui/kit';
import { TuiMonth, TuiMonthRange } from '@taiga-ui/cdk';
import { GoToComponent } from 'src/app/helpers/go-to/go-to.component';

@Component({
  selector: 'app-calendars',
  standalone: true,
  imports: [
    CommonModule, TuiCalendarModule, TuiCalendarRangeModule,
    TuiCalendarMonthModule, GoToComponent
  ],
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})
export class CalendarsComponent {

  /*  CalendarMonth   Section   */

  value: TuiMonthRange | null = null;

  max = new TuiMonth(2021, 7);
  min = new TuiMonth(2019, 7);

  onMonthClick(month: TuiMonth): void {
    if (this.value === null || !this.value.isSingleMonth) {
      this.value = new TuiMonthRange(month, month);

      return;
    }

    this.value = TuiMonthRange.sort(this.value.from, month);
  }

  /****************************** */

}
