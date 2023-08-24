import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
// El ? indica que puede ser nulo o undefined en algun momento, el ! indica que siempre vendra
  private htmlElement?:ElementRef<HTMLElement>;

  constructor(private elem:ElementRef<HTMLElement>) {
    this.htmlElement=elem;
  }
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }



}
