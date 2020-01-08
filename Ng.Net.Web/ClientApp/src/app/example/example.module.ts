/*
 * @Author: CollapseNav
 * @Date: 2020-01-02 15:23:27
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 23:50:22
 * @Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SiderComponent } from './sider/sider.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleGuard } from './example.guard';
import { TokenInterceptor } from '../SignInUp/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'example', component: ExampleComponent,
        canActivate: [ExampleGuard],
        children: [
          { path: 'counter', component: CounterComponent },
          { path: 'edituser', component: EdituserComponent },
          { path: 'table', component: TableComponent },
          { path: '', redirectTo: 'counter', pathMatch: 'full' },
        ]
      }
    ])
  ],
  declarations: [
    ExampleComponent,
    TopbarComponent,
    SiderComponent,
    CounterComponent,
    EdituserComponent,
    TableComponent,
  ],
  providers: [
    ExampleGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ]
})
export class ExampleModule { }
