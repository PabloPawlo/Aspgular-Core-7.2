import { Component, OnInit,  } from '@angular/core';
import { User } from "../../models/User.model";
import { UserService } from "../../services/User.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { idValidator} from '../../validators/id-validator';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user: User = new User(0, '', false, new Date('12'));
  private contactForm: FormGroup;
 


  constructor(private userService: UserService, public modalService: NgbModal) {
    this.contactForm = this.createFormGroup();
  }
  ngOnInit() {}

  ngOnChanges() {
  
  }

  onModalRequest(): void {
    const modalRef = this.modalService.open(MessageBoxComponent); //Added Modal Component here

    modalRef.componentInstance.title = "Title";//anything u wish to pass to modal component @Input 
    modalRef.componentInstance.content = "Content";
    modalRef.componentInstance.optionYes = "Yes";
    modalRef.componentInstance.optionNo = "No";

    modalRef.result.then((result) => {
      console.log(result);
      console.log('closed');
    }).catch((result) => {
      console.log(result);
      console.log('cancelling');
    });
  }


  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required, idValidator]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      isAlive: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required])
    });
  }

  get id() {  
    return this.contactForm.get('id');
  }

  get surname() {
    return this.contactForm.get('surname');
  }

  get isAlive() {   
    return this.contactForm.get('isAlive');
  }

  get birthDate() {  
    return this.contactForm.get('isAlive');
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    this.user.id = this.contactForm.get('id').value;
    this.user.surname = this.contactForm.get('surname').value;
    this.user.isAlive = this.contactForm.get('isAlive').value;
    this.user.birthDate = this.contactForm.get('birthDate').value;
    this.postUser();
  }

  postUser() {
    this.userService.post(this.user).subscribe(result => {console.log(result)});;
  }

  putUser() {
    this.userService.put(this.user);
  }

}
