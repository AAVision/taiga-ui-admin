import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiNotificationModule } from '@taiga-ui/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    CommonModule, TuiNotificationModule
  ],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {

}
