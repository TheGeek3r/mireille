import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtre-articles',
  templateUrl: './filtre-articles.component.html',
  styleUrls: ['./filtre-articles.component.sass']
})
export class FiltreArticlesComponent implements OnInit {

  constructor() { }

  @Output() changeFiltre: EventEmitter<string> = new EventEmitter<string>(); 
  @Output() changeType: EventEmitter<string> = new EventEmitter<string>();
  inputFiltre : string = "";
  type : string = "";

  ngOnInit() {
  }

  notifyParent()
  {
    this.changeType.emit(this.type);
    this.changeFiltre.emit(this.inputFiltre);
  }

}
