import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import {DashboardComponent} from './dashboard.component'
import {routing} from './app.routing'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    //这个数组包含了所有属于本应用模块的，由我们亲自创建的组件、管道和指令
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        //这个HeroService 的单例对象，它对应用中的 所有 组件都有效
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
