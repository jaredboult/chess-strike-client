import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        BoardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
