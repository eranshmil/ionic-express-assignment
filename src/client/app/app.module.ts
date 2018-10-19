import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SharedModule } from './shared/shared.module';
import { APP_CONFIG, APP_CONFIG_TOKEN } from './app.config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UrlProvider } from '../providers/url.provider';

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
    UrlProvider,
  ],
})
export class AppModule {}
