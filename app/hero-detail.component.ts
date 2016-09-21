/*
英雄详情组件
 */
import { Component, Input } from '@angular/core';
import {Hero} from './hero'
@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="hero">
        <h2>{{hero.name}} 英雄!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>名称: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
    `
})
export class HeroDetailComponent {
    //这里的@Input()修饰之后表示该组件可以接受hero属性输入，好比react接受属性一样
    @Input()
    hero: Hero;
}
