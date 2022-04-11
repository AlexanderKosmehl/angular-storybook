import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  /**
   * List of strings to show up
   */
  @Input()
  listElements: string[] = []
}
