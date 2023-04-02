import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './main-panel/board/board.component';
import { HeaderComponent } from './top-panel/header/header.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    TopPanelComponent,
    BottomPanelComponent,
    MainPanelComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [BoardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
