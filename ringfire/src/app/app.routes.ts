/* import { Routes } from '@angular/router';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { GameComponent } from './game/game.component';
import { PrintComponent } from './print/print.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  { path: 'start', component: StartscreenComponent },
  { path: 'game', component: GameComponent },
  { path: 'print', component: PrintComponent },
];
 */

import { Routes } from "@angular/router";
import { StartscreenComponent } from "./startscreen/startscreen.component";
import { GameComponent } from "./game/game.component";
import { PrintComponent } from "./print/print.component";

export const routes: Routes = [
  {
    path: "",
    component: PrintComponent, // Layout mit Navbar
    children: [
      { path: "", redirectTo: "start", pathMatch: "full" },
      { path: "start", component: StartscreenComponent },
      { path: "game", component: GameComponent },
    ],
  },
];
