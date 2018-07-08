import { Component } from '@angular/core';

import { QuotesPage } from "../quotes/quotes";
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  quoteCollection: {
    category: string,
    quotes: Quote[],
    icon: string
  }[];
  quotesPage = QuotesPage;

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }
}
