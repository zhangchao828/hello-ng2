import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    //这个数组包含了所有属于本应用模块的，由我们亲自创建的组件、管道和指令
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
