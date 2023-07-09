import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule, TuiCheckboxLabeledModule, TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, TuiInputModule,
    TuiInputPasswordModule, TuiButtonModule, TuiCheckboxLabeledModule,
    TuiIslandModule, RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
      remember: new FormControl(null, [Validators.required]),
    });
  }
}
