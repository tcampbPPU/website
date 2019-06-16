import { Component, OnInit } from '@angular/core'; // ViewChild
import { MessageService } from '../../services/message.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // messages: Object;
  messages: any;


  constructor(
    private flashMessage: FlashMessagesService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data.messages;
    },
    err => {
      console.log(err)
      return false;
    });
  }

  markedRead(id) {
    // remove from UI
    this.messages = this.messages.filter(msg => msg.id !== id);

    // Update DB mark as read
    this.messageService.markedAsRead(id).subscribe();
  }

}
