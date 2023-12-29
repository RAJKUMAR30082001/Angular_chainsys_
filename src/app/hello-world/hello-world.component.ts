import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
      head:string='welcome'
      click:number=0
      value:string=''
      name='raj'
      onClick(){
        this.click++
      }
      refersh(){
        this.click=0
      }
      // find the input element is coming form correct target or not
      UcanSeeMe(event:Event){
        if(event.target instanceof HTMLInputElement)
        this.value=event.target.value
      }
}
