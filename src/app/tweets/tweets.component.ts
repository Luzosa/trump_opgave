import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  
  contains: boolean;
  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);

   }

   checkWord(word:string){
     for(let i = 0; i < this.twat.length; i++ ){
       if(this.twat[i].text.includes(word.toString())) {
         this.contains = true;
         
       }
       else {
         this.contains = false;         
       }
     }
      
   }

  ngOnInit() {
    
  }

}
