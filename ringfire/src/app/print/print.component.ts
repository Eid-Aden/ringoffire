import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './print.component.html',
  styleUrl: './print.component.scss',
})
export class PrintComponent {}

  


