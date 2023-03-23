import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {
  board: any[][] | undefined;

  constructor() {
    this.initBoard();
  }

  ngOnInit(): void {
  }

  initBoard(): void {
    this.board = [];
    for (let row = 0; row < 8; row++) {
      this.board[row] = [];
      for (let col = 0; col < 8; col++) {
        this.board[row][col] = null;
      }
    }
  }

  cellClicked(row: number, col: number): void {
    console.log('Cell clicked:', row, col);
  }
}
