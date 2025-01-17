import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AllUserComponent } from './Components/all-user/all-user.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetUserComponent } from './Components/get-user/get-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ErrorDialogService} from './Interceptors/Errors/error-dialog'
import { HttpConfigInterceptor } from './Interceptors/http-interceptor';
import { UserService } from './services/User.service';
import { ErrorDialogComponent } from './Components/error-dialog/error-dialog.component';
import { GitButtonComponent } from './Components/git-button/git-button.component';
import { MessageBoxComponent } from './Components/message-box/message-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AddUserComponent,
    AllUserComponent,
    GetUserComponent,
    DeleteUserComponent,
    FooterComponent,
    GetUserComponent,
    ErrorDialogComponent,
    GitButtonComponent,
    MessageBoxComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: AllUserComponent, pathMatch: 'full' },
      { path: 'add-user', component: AddUserComponent },
      { path: 'get-user', component: GetUserComponent },
      { path: 'delete-user', component: DeleteUserComponent },
    ])
  ],
  providers: [
     UserService,
     ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }  
  ],
  entryComponents: [ErrorDialogComponent, MessageBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
