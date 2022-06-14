import { Component, OnInit } from '@angular/core';
import { ServicePhoneService } from 'src/app/service-phone.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})

export class BookComponent implements OnInit {
  

  constructor(private myService: ServicePhoneService) {}

  ngOnInit(): void {
    this.getAll();
  }
  
  
  id: any;
  name: string = '';
  Person: any;
  userInput: any;
  usersList: any; 
  PhoneNumber: number =1;
  Users: { id: any; name: any; PhoneNumber: any }[] = [];


  
  addItem() {
    let Person = {
      name: this.name,
      PhoneNumber: this.PhoneNumber,
    };

    if (this.name.length <= 2) {
      alert('please enter name greater than 2 char');
      return;
    }
   
    this.myService.uniquePhone(Person.PhoneNumber).subscribe(
      (response: any) => {
        if(response.length>0){
          alert('please enter correct number'); 
        }
       else{
        this.myService.postData(Person).subscribe(
          (response) => {
            this.Users.push(response);
          },
          (err) => {
            console.log(err);
          }
        );
       }
      },
      (err) => {
        console.log(err);
        alert('please enter correct phoneNumber');
      }
    );
   
  }


  editItem(User: any) {
    User.PhoneNumber = +User.PhoneNumber;
    console.log(User);
    this.myService.updateData(User, User.id).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteItem(id: any) {
    this.myService.deleteData(id).subscribe(
      (response) => {
        console.log(response);
        const index = this.Users.findIndex((x) => x.id == id);
        this.Users.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  searchItem() {
    this.myService.search(this.userInput).subscribe(
      (response: any) => {
        console.log(response);
        this.Users = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  resetItem() {
    this.userInput = '';
    this.getAll();
  }


  getAll() {
    this.myService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.Users = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
