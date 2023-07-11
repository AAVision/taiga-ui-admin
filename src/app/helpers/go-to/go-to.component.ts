import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'app-go-to',
  standalone: true,
  imports: [
    CommonModule, TuiLinkModule
  ],
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent {
  @Input('name') name: string;
  @Input('url') url: string;
}
