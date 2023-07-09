import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
    TuiInputModule, TuiInputPasswordModule, TuiLinkModule,
    TuiButtonModule, TuiCheckboxLabeledModule, TuiInputDateModule,
    TuiIslandModule, TuiMarkerIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      dob: new FormControl(null, [Validators.required]),
      agreeToToC: new FormControl(null, [Validators.required]),
    });
  }
}
