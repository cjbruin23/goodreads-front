import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AllBooksComponent } from './all-books/all-books.component';

@NgModule({
    imports: [CommonModule, MainRoutingModule],
    declarations: [MainComponent, AllBooksComponent],
    exports: [MainComponent],
})
export class MainModule { }