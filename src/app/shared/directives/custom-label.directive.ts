import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
// El ? indica que puede ser nulo o undefined en algun momento, el ! indica que siempre vendra
  private htmlElement?:ElementRef<HTMLElement>;
  private _color:string='red';
  private _errors?:ValidationErrors|null;


  @Input() set color(value:string){
    this._color=value;
    this.setStyle();
  }

  @Input() set errors(value:ValidationErrors|null|undefined){
    this._errors=value;
    this.setErrorMessage();
  }
  constructor(private elem:ElementRef<HTMLElement>) {
    this.htmlElement=elem;

  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle():void{
    if(!this.htmlElement)return;

    this.htmlElement!.nativeElement.style.color=this._color
  }

  setErrorMessage():void{
    if(!this.htmlElement)return;

    if(!this._errors){
      this.htmlElement.nativeElement.innerText='No hay errores';
      return;
    }

    const errors=Object.keys(this._errors)

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText='Este campo es requerido';
    }
  }
}
