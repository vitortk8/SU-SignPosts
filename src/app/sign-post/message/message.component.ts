import { SignPost } from './../signpost.model';
import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  messageForm: FormGroup;
    constructor(private dataStorageService: DataStorageService,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.dataStorageService.storeMessage(
      this.route.snapshot.params['id'],
      {
        message: this.messageForm.value['message'],
        info: this.messageForm.value['info']
      })
      .subscribe(
        (response: Response) => {
            console.log(response.json());
            console.log(response.json().idMessage);
            this.dataStorageService.updateDisplay(
                this.route.snapshot.params['id'], 1, response.json().idMessage
            ).subscribe(
                (resp: Response) => {
                    console.log("subscribe do subscribe", resp.json())
                }
            );
        }
      );
  }

  private initForm() {
    let message = '';
    let info = '';

    this.messageForm = new FormGroup({
      'message': new FormControl(message, Validators.required),
      'info': new FormControl(info)
    });
  }

}
