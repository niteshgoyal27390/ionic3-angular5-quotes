import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  @ViewChild('navBar') navBar : NavController;

  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.navBar.setRoot(page);
    this.menuCtrl.close();
  }
}

