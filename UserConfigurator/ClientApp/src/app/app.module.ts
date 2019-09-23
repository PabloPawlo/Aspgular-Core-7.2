import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AllUserComponent } from './Components/all-user/all-user.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetUserComponent } from './Components/get-user/get-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddUserComponent,
    AllUserComponent,
    GetUserComponent,
    DeleteUserComponent,
    FooterComponent,
    GetUserComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AllUserComponent, pathMatch: 'full' },
      { path: 'add-user', component: AddUserComponent },
      { path: 'get-user', component: GetUserComponent },
      { path: 'delete-user', component: DeleteUserComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
