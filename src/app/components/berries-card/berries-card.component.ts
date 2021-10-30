import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-berries-card',
  templateUrl: './berries-card.component.html',
  styleUrls: ['./berries-card.component.sass']
})
export class BerriesCardComponent implements OnInit {
  @Input()
  public berry: any | null = null; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.berry)
  }
  getImgBerrie() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${this.berry.name}-berry.png`;
    }

  }
