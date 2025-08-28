import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-startscreen",
  standalone: true,
  templateUrl: "./startscreen.component.html",
  styleUrl: "./startscreen.component.scss",
  imports: [RouterLink, MatButtonModule],
})
export class StartscreenComponent {
  /*   constructor(private router: Router) {}
  newGame() {
    this.router.navigateByUrl('/game');
  };
  newNav() {
    this.router.navigateByUrl('/print');
  }
 */
}
