import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../service/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  private quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.onRemoveFromFavorites(quote);      
      }
    })
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteElement: Quote) => {
      return quote.id === quoteElement.id;
    });
    this.quotes.splice(position, 1);
  }
}
