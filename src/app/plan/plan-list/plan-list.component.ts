import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css'],
})
export class PlanListComponent {
  stored: string | null;

  constructor() {
    this.stored = localStorage.getItem('plan');
  }

  generate() {
    localStorage.setItem('plan', 'Testplan');
  }
}
