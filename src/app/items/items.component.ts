import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item: Item = {
    name: 'hello'
  };

  items: Item[] = [];

  itemService: ItemService;
  
  constructor(itemService: ItemService) {
    this.itemService = itemService;
   }

  ngOnInit(): void {
    console.log("Hello");
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
