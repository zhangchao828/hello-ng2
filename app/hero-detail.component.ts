/*
一个英雄详情组件
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';

import {Hero} from './hero'
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            //通过+操作把params['id']转为数字类型
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack);
    }
    goBack(): void {
        window.history.back();
    }
}
