import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from "../../models/User.model";
import { UserService } from "../../services/User.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { idValidator} from '../../validators/id-validator';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user: User = new User(0, '', false, new Date('12'));
  private contactForm: FormGroup;

  constructor(private userService: UserService) {
    this.contactForm = this.createFormGroup();
    
  }
  ngOnInit() {}

  ngOnChanges() {
  
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
