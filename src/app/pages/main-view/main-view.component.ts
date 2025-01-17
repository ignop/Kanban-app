import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';

@Component({
    selector: 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
    constructor() { }


    //TODO:
    //inject data from database

    //example data
    board: Board = new Board('Test Board', [
        new Column('Ideas', ['Some random idea', 'Another random', 'Awesome idea',]),
        new Column('Research', ['Lorem ipsum', 'Random', 'Awesome research']),
        new Column('Todo', ['Lorem ipsum', 'Random', 'Awesome research']),
        new Column('Done', ['Get up', 'Brush teeth', 'Take a shower']),
    ]);

    ngOnInit(): void { }


    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
