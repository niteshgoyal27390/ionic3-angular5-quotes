import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../service/quotes';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  }

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
  private quotesService: QuotesService) {
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data
  }

  onAddToFavorite(quote: Quote) {
    const alertBox = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote',
      buttons: [
        {
          text: 'Yes, Go ahead!',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No, I changed',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled..')
          }

        }
      ]
    });
    alertBox.present();
  }
}
