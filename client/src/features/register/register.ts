import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  membersFromHome  = input.required<User[]>();
  protected creds = {} as RegisterCreds;

  register(): void{
    console.log(this.creds); 
  }

  cancel(): void{
    console.log("Cancell executed");
  }
}
