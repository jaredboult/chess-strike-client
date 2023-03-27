import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit, OnDestroy {
  board: any[][] | undefined;
  sizeObserver: ResizeObserver | undefined;

  constructor() {
    this.initBoard();
  }

  ngOnInit(): void {
    this.calculateBoardSize();
  }

  ngOnDestroy() {
    if(this.sizeObserver){
      this.sizeObserver.disconnect();
    }
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

  private calculateBoardSize(): void {
    this.sizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries){
        if(entry.contentRect){
          // Top panel height calculation
          const topPanel = document.querySelector('app-top-panel') as HTMLElement;
          let topHeight = 0;
          if(!topPanel){
            throw new Error("Cannot find the top-panel");
          }
          topHeight = topPanel.getBoundingClientRect().height;

          // Bottom panel height calculation
          const bottomPanel = document.querySelector('app-bottom-panel') as HTMLElement;
          let bottomHeight = 0;
          if(!bottomPanel){
            throw new Error("Cannot find the top-panel");
          }
          bottomHeight = bottomPanel.getBoundingClientRect().height;

          // Viewport size
          const entireWidth = entry.contentRect.width;
          const entireHeight = entry.contentRect.height

          const width = entireWidth;
          const height = entireHeight - topHeight - bottomHeight;

          let stringValue = '';
          if (width < height){
            stringValue = `${width}px`;
          } else {
            stringValue = `${height}px`;
          }
          const boardElement = document.querySelector('#board') as HTMLElement;
          if(!boardElement){
            throw new Error("Cannot find the board");
          }
          boardElement.style.width = stringValue;
          boardElement.style.height = stringValue;
          console.log("hi")
        }
      }
    });

    const body = document.querySelector('body');
    if (!body) {
      throw new Error("Body doesn't exist wtf");
    }
    this.sizeObserver.observe(body);
  }
}
