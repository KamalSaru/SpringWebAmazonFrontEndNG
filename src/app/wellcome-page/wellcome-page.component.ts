import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wellcome-page',
  templateUrl: './wellcome-page.component.html',
  styleUrls: ['./wellcome-page.component.scss']
})
export class WellcomePageComponent {

  //Data connections
  @Input() dataFromParent : any;
  @Input() alert! : string;
  @Output() childEvent =new EventEmitter();

  data='Welcome to amazon.com!!!'


  ngOnInit(): void{
    this.childEvent.emit(this.data)
    this.childEvent.emit(this.dataFromParent)
  }

  sendAlert(){
    this.childEvent.emit("Get alert when click from event!!!")
  }

}
