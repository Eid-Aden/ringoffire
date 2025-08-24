import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintComponent } from '../print/print.component';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PrintComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  game = new Game;

pickCardAnimation= false;
 currentCard:string= "";

constructor(private router: Router){


};

ngOnInit(): void {
  this.newGame()


  }

  newGame(){

    this.game = new Game()
      console.log('Game Gestartet',this.game)
  }

  backHome() {
    this.router.navigateByUrl('/start');
  }


  pickCard(){
    if(!this.pickCardAnimation){
      
  
 const card = this.game.stack.pop() as string;  
  this.currentCard = card; 
   this.pickCardAnimation = true;

  setTimeout(()=>{
     this.pickCardAnimation = false;


  },1500)
}
 
   
  }
}
