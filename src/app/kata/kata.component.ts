import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.component.css']
})
export class KataComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('labas');
  }

  ngOnInit(): void {
  }

  multiplyArray(array: Array<number>): number {
    let counter = 1;
    for (const item of array) {
      counter *= item;
    }
    return counter;
  }

  ngOnDestroy() {
    console.log('ate');
  }

}
