import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../services/studentdata.service';
import { Router, NavigationExtras, Data} from '@angular/router';
import { Student } from './student';
import { ModalController, NavParams } from '@ionic/angular';
import { DeletestudentPage } from '../deletestudent/deletestudent.page';
import { AddstudentPage } from '../addstudent/addstudent.page';
import { Tab2PageModule } from './tab2.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  students:any;
  newStudents:any;
  newStudent=new Student();

  constructor(private studentdataservice: StudentdataService, 
  private router: Router, private modalCtrl: ModalController) {}

  getStudentData(){
    // Get the information from the API using Observable
    // by subscribing to the studentservice Observable 
    this.studentdataservice.getData().subscribe(result => {
    this.students = result;
    this.newStudents = this.students.students;
    console.log(this.newStudent);
    });
  }

  async deleteStudent(student: any){
    //create modal instance 
    const modal = await this.modalCtrl.create({
      component: DeletestudentPage,
      componentProps: {student: student}
    });
    //Get the data returned from Modal and add to golbal variable 
    modal.onDidDismiss().then(data => {
      //Check if data has been retured
      //if not, the modal was cancelled 
      //using back button
      if (data['data']) {
        //Do this to determine which operation
        //delete or update has occured
        if (data['data']['operation'] == "delete"){
          //Call remove student which will remove the 
          //Studnet object from the list array 
          this.removeStudent(data['data']['student'])
          console.log(data['data']['opration']);
        }else if (data['data']['operation'] == "update") {
          //if operation was update then update the student 
          //list by replacing the array item with the updated
          //object passed back from thr modal 
          this.updateStudentList(data['data']['student'])
        }

      }else{
        console.log("Modal Cancelled");
      }  
    });
    return await modal.present();
  }

  //Method that removes student from newStudent array based on index
  removeStudent(theStudent: Student){
    //Get index of student object in newStudent Array
    let listIndex = this.newStudents.indexOf(theStudent);
    //Remove 1 object from array at index using splice 
    this.newStudents.splice(listIndex, 1);
    console.log("Student removed at index: " + listIndex);
  }

  //Method that update studnet in newStudent array based on index 
  updateStudentList(theStudent: Student) {
    //Get index of student object in newStudent Array 
    let listIndex = this.newStudents.indexOf(theStudent);
    //Update 1 object in array using index
    this.newStudents.item[listIndex] = theStudent;
    console.log("Student update at index " + listIndex);
  }

  // Create modal that will launch to add a new student to
  // the MySQL database using the AddStudentPage
  // The student object is then passed back from the modal
  // so that we can update the list view with the new item 
  // Note: ensure to import the AddStudentPage module to app.module.ts and 
  // add it to the imports array too
  async addStudent() {
    // create modal instance
    const modal = await this.modalCtrl.create({
      component: AddstudentPage
    });
    //Get the data returned from the Modal and add to global variable
    modal.onDidDismiss().then(data => {
      // Check if data has been retured
      // if not, the modal was cancelled
      // using back button
      if (data['data']) {
        this.newStudents.push(data['data']);
        console.log(data['data']);
      } else {
        console.log("Modal Cancelled");
      }

    });
    return await modal.present();
  }

  ngOnInit() {
    this.getStudentData();
  }
  
}
