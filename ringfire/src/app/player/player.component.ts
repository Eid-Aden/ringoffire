import { Component, Input } from "@angular/core";

@Component({
  selector: "app-player",
  standalone: true,
  templateUrl: "./player.component.html",
  styleUrl: "./player.component.scss",
})
export class PlayerComponent {
  @Input() name!: string;
  @Input() activePlayer: boolean = false;
}
