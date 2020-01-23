/*
 * @Author: CollapseNav
 * @Date: 2019-12-27 18:31:29
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-23 20:20:06
 * @Description:
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInUpModule } from './SignInUp/SignInUp.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExampleModule } from './example/example.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SignInUpModule,
    ExampleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
