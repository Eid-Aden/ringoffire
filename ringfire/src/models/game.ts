import { MinLengthValidator } from "@angular/forms";

export class Game{
    public players:string[] = [];
    public stack:string[] = [];
    public playedCard:string[] = [];
    public currentPlayer:number= 0;

   constructor(){

         for( let  i = 1; i< 14; i++){
        this.stack.push('ace_'+ i)
        this.stack.push('clubs_'+ i)
        this.stack.push('hearts_'+ i)
        this.stack.push('diamonds_'+ i)

         }
         shuffle(this.stack)
    }
 



}


function shuffle<T>(arr: T[]): T[] {MinLengthValidator
  let currentIndex = arr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}
