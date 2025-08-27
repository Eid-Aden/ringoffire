/* import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PrintComponent } from "../print/print.component";
import { Game } from "../../models/game";
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ChangeDetectionStrategy, inject, model, signal } from "@angular/core";
import { DialogAddPlayerComponent } from "../dialog-add-player/dialog-add-player.component";

@Component({
  selector: "app-game",
  standalone: true,
  imports: [CommonModule, PrintComponent, PlayerComponent, MatIconModule, MatButtonModule, DialogAddPlayerComponent],
  templateUrl: "./game.component.html",
  styleUrl: "./game.component.scss",
})
export class GameComponent implements OnInit {
  game = new Game();

  pickCardAnimation = false;
  currentCard: string = "";



  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log("Game Gestartet", this.game);
  }

  backHome() {
    this.router.navigateByUrl("/start");
  }

  pickCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop() as string;
      this.currentCard = card;
      this.pickCardAnimation = true;

      console.log("New Card Playef", this.currentCard);
      console.log("Game ist", this.game);

      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
 */

import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { PrintComponent } from "../print/print.component";
import { Game } from "../../models/game";
import { PlayerComponent } from "../player/player.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { DialogAddPlayerComponent } from "../dialog-add-player/dialog-add-player.component";
import { GameCardComponent } from "../game-card/game-card.component";

@Component({
  selector: "app-game",
  standalone: true,
  imports: [CommonModule, PrintComponent, PlayerComponent, MatIconModule, MatButtonModule, DialogAddPlayerComponent, GameCardComponent],
  templateUrl: "./game.component.html",
  styleUrl: "./game.component.scss",
})
export class GameComponent implements OnInit {
  game = new Game();
  pickCardAnimation = false;
  currentCard: string = "";

  readonly name = signal("");
  readonly animal = signal("");

  readonly dialog = inject(MatDialog);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log("Game Gestartet", this.game);
  }

  backHome() {
    this.router.navigateByUrl("/start");
  }

  pickCard() {
    if (!this.pickCardAnimation) {
      const card = this.game.stack.pop() as string;
      this.currentCard = card;
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: { name: "" },
    });

    dialogRef.afterClosed().subscribe((names: string) => {
      console.log("registed by", names);
      this.game.players.push(names);
    });
  }
}
