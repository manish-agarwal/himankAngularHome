import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BasicTextDirective } from './basic-text.directive';
import { AppBetterHighlightDirective } from './app-better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServerComponent,
    ServersComponent,
    LoginPageComponent,
    UserdetailsComponent,
    ImagedetailsComponent,
    BasicHighlightDirective,
    BasicTextDirective,
    AppBetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
