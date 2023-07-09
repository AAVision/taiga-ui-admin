import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiCalendarModule } from '@taiga-ui/core';
import { TuiCalendarRangeModule, tuiCreateDefaultDayRangePeriods } from '@taiga-ui/kit';
import { TuiCalendarMonthModule } from '@taiga-ui/kit';
import { TuiMonth, TuiMonthRange } from '@taiga-ui/cdk';

@Component({
  selector: 'app-calendars',
  standalone: true,
  imports: [
    CommonModule, TuiCalendarModule, TuiCalendarRangeModule,
    TuiCalendarMonthModule
  ],
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})
export class CalendarsComponent {

  items = tuiCreateDefaultDayRangePeriods();

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
