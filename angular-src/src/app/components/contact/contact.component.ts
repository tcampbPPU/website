import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { MessageService } from '../../services/message.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: any;
  first_name: String;
  last_name: String;
  email: String;
  message: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.localStorageService.get('user');
  }



  onContactSubmit() {
    const form = {
      user_id : this.user.user_id,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      message: this.message
    };


    // Validate Email
    if(!this.validateService.validateEmail(form.email)) {
      this.flashMessage.show('Please use a valid email!', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validateContactMessage(form)) {
      this.flashMessage.show('Please fill in all fields!', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Send form to Message service
    this.messageService.leaveMessage(form).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/dashboard']);
      }else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/contact']);
      }
    });
  }
}
