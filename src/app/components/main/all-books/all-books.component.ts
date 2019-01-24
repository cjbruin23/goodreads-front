import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


@Component({
    selector: 'all-books',
    templateUrl: './all-books.component.html',
    styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
    title: string;
    books: any[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.title = 'Customers';
        this.dataService.getBooks()
            .subscribe((books: []) => this.books = books);
    }

}