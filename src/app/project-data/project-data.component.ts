import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit {

  data:any[];
  constructor(private service: ProjectsService) { 
    console.log('project-data component instantiated');
  }

  ngOnInit(): void {
    console.log('init');
  /*  this.service.getAllProjectfromBackend().subscribe(
      (data) =>{ this.data = data}, 
      (error) =>{ console.log(error)}, 
      () =>{console.log('complete signal')});
  }*/

  this.service.getAllProjectfromBackend1().subscribe(
    (response) => {
       console.log(response);
      this.data = response.body;
    }
  );
 

}
} 






