import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
    public name:string=''
    public bool:string | undefined;
    public res:string=''
    
    findvalid(){
      this.Validit(this.name)
      this.name=''

    }
    Validit(s:string){
      const pattern = /^[^\d\W_@]+$/;
      
      this.bool=String(pattern.test(s))
      this.res+=this.bool?'valid name \n':'invalid name \n'
      
    }
}
