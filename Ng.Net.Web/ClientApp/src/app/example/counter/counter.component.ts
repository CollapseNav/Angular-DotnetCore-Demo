/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 00:16:41
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 01:31:19
 * @Description:
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  forbtn1 = 0;

  forbtn2 = 1;

  forbtn3 = 0;

  inputvalue = '0';

  onBtn1() {
    this.forbtn1 += 1;
  }

  onBtn2() {
    this.forbtn2 += this.forbtn2;
  }

  onBtn3() {
    const num = Number.parseFloat(this.inputvalue ? this.inputvalue : '0');
    this.forbtn3 += num;
  }

  constructor() { }

  ngOnInit() {
  }

}
