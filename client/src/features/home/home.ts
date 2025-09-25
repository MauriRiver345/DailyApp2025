import { Component, Input, input, signal } from '@angular/core';
import { Register } from '../register/register';
import { User } from '../../types/user';
@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Input({ required: true }) usersFromApp!: User[];

  protected registerMode = signal(false);

  showRegister(): void {
    this.registerMode.set(true);
  }
}