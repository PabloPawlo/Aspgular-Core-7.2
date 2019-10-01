import { Component,  Input, Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent {
  @Input()
  type: string;
  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  optionYes: string;
  @Input()
  optionNo: string;

  closeResult: string;


  constructor(public activeModal: NgbActiveModal) {

  }


  close() {
    this.activeModal.close();
  }

  ngOnInit() {
  }




}

