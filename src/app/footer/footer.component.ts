import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
//   template: `
//   <button type="button" (click)="toggleExists()">Toggle Component</button>
//   <hr>
//   <app-header *ngIf="exists">
//     Hello
//   </app-header>

// <div class="tabs-selection">
//   <app-tab [active]="isSelected(1)" (click)="setTab(1)">Tab 1</app-tab>
//   <app-tab [active]="isSelected(2)" (click)="setTab(2)">Tab 2</app-tab>
//   <app-tab [active]="isSelected(3)" (click)="setTab(3)">Tab 3</app-tab>
// </div>

// <div [ngSwitch]="tab">
//   <app-tab-content *ngSwitchCase="1"> Tab content 1 </app-tab-content>
//   <app-tab-content *ngSwitchCase="2"> Tab content 2 </app-tab-content>
//   <app-tab-content *ngSwitchCase="3"><app-tab-3></app-tab-3></app-tab-content>
//   <app-tab-content *ngSwitchDefault>Select a tab </app-tab-content>
// </div> 
// `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  exists=true;
  tab:number=3;

  constructor() { }

  ngOnInit() {
  }

  toggleExists()
  {
    this.exists=!this.exists;
  }

  setTab(num:number)
  {
    this.tab=num;
  }

  isSelected(num:number)
  {
    return this.tab===num;
  }
}
