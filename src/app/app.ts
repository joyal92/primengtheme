import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Table } from 'primeng/table';
import { Primetable } from './primetable/primetable';

@Component({
  selector: 'app-root',
  imports: [ButtonModule,Primetable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'primngthemetest';
}
