import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter/counter.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/counter/state/counter.reducer';
import { CustomCounterInputComponent } from './components/counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    HomeComponent,
    NavbarComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counterStore: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
