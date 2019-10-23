import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.sass'],
})
export class RecapitulatifComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
