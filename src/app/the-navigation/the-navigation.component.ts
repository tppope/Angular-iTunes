import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-the-navigation',
  templateUrl: './the-navigation.component.html',
  styleUrls: ['./the-navigation.component.scss']
})
export class TheNavigationComponent {

  @Input() brand: string = '';

  constructor() { }

}
