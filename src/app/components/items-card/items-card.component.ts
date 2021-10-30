import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.sass']
})
export class ItemsCardComponent implements OnInit {
  @Input()
  public item: any | null = null; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }
  
  getImgItem() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${this.item?.name}.png`;
    }
}
