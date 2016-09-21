import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
//和java一样，ts中实现一个接口必须实现该接口中的所有抽象方法
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }
    //实现OnInit接口中的ngOnInit抽象函数
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
