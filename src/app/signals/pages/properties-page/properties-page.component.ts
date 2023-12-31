import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy,OnInit{

  public counter=signal(10);
  public user=signal<User>({
    id:         1,
    email:      "bryangrueso2@gmail.com",
    first_name: "Bryan",
    last_name:  "Camilo",
    avatar:     "https://cdn.punchng.com/wp-content/uploads/2023/04/24143129/doi.jpg"
  });
  public fullName=computed(()=>`${this.user().first_name} ${this.user().last_name} `)

  public userChangedEffect=effect(()=>{
    console.log(`${this.user().first_name}-${this.counter()}`)
  });
  ngOnInit(): void {
    setInterval(()=>{
      this.counter.update(current=>current+1);
    },1000)
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated(field:keyof User,value:string){


  //  Forma rupestre
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // })

    //Update
    this.user.update(current=>{
      return{
        ...current,
        [field]:value
      }
    })

    // Mutación
    // this.user.mutate(current=>{
    //   switch(field){
    //     case 'email':
    //       current.email=value;
    //     break;
    //     case 'first_name':
    //       current.first_name=value;
    //     break;
    //     case 'last_name':
    //       current.last_name=value;
    //     break;
    //     case 'id':
    //       current.id=Number(value);
    //     break;
    //   }
    // })
  }
  incresedBy(value:number){
    this.counter.update(current=>current+value)
  }
}
