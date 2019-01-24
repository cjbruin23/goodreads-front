import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  title = ''

  constructor(private data: DataService) { }

  onSubmit() {
    const book = {
      title: this.title
    }
    this.data.newBookSubmit(book).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
