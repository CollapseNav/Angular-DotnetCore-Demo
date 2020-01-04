/*
 * @Author: CollapseNav
 * @Date: 2020-01-02 15:23:27
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-04 19:16:34
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
import { FormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'example', component: ExampleComponent, children: [
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
  ]
})
export class ExampleModule { }
