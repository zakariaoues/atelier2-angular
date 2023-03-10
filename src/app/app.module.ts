import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreEmploiComponentComponent } from './offre-emploi-component/offre-emploi-component.component';
import { ArticleComponentComponent } from './article-component/article-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreEmploiComponentComponent,
    ArticleComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
