import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: `[Direc]`
})

export class DirecDirective {

    constructor(
        public el:ElementRef,
        public renderer: Renderer2
    ){

    }

    @Input() Direc:boolean | undefined

    ngOnInit(){
        if(this.Direc) this.renderer.setStyle(this.el.nativeElement, 'color', "red")
    }
}