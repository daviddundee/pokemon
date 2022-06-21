import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApproutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNoFound } from './page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './pokemon/in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login/login-routing.module';
import { AuthService } from './auth-service';

@NgModule({
  declarations: [
    AppComponent,
    PageNoFound,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    //demarrage de l application+ les outils (ngif ngfor interpolattion event(directive))
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    PokemonModule,
    LoginRoutingModule,
    ApproutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
