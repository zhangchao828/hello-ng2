import { TestBed } from '@angular/core/testing';
import { AppComponent } from './';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
