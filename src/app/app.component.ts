import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError=true;
  userModel=new User("Vijay","abc@123.com",1849914919,"default","morning",true);

  validateTopic(value)
  {
    if(value== 'default'){
      this.topicHasError=true;
    }
    else
    {
      this.topicHasError=false;
    }

  }
  onSubmit(userData)
  {
    console.log(userData);
  }
}
