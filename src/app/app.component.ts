import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomNumber: number;

  number: number;
  messages = [];
  gameOver = false;

  launchGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1
  }

  checkNumber() {
    if(this.number > this.randomNumber) {
      this.messages.push(this.number + ": Moins");
    } else if(this.number < this.randomNumber){
      this.messages.push(this.number + ": Plus");
    } else {
      this.gameOver = true;
      this.messages.push("Bravo, c'est bien ça: " + this.randomNumber);
    }
    this.number = undefined;
  }

  restartGame() {
    this.gameOver = false;
    this.randomNumber = undefined;
    this.messages = [];
  }
}
