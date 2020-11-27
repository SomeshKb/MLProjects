import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({
    selector: '[appAnimationTyping]'
})
export class AnimationTypingDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    textSubscribe: Subscription;

    text: any = '';

    constructor(private elRef: ElementRef) { }


    ngOnInit() {
        this.text = this.elRef.nativeElement.textContent;
        console.log(this.text)
    }

    ngAfterViewInit() {
        this.elRef.nativeElement.textContent = "";
        const source = interval(100);
        this.textSubscribe = source.subscribe(val => {
            if (this.text == "") {
                if (this.textSubscribe) {
                    this.textSubscribe.unsubscribe();
                }
            } else {
                this.changeText();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {

    }
    ngOnDestroy() {

    }


    changeText() {
        this.elRef.nativeElement.textContent = this.elRef.nativeElement.textContent + this.text.slice(0, 1)
        this.text = this.text.slice(1);
        console.log(this.text)
    }

}
