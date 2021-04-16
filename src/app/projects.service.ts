import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './model/project';
import {map, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root' // provider is the service itself
})
export class ProjectsService {

  myObservable: Observable<any>;
  URI ="http://localhost:3000/projects";
  constructor(private httpClient : HttpClient)
  {
    console.log('service instantiated..');
  }

  getAllProjects() :Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.URI);
   }

   // response will be sent from response body
  getAllProjectfromBackend() : Observable<Project[]>
  {
    this.myObservable = this.httpClient.get<Project[]>('http://localhost:3000/projects')
    .pipe(map((data: Project[]) =>{
        
           for(let i=0; i< data.length; i++){
             data[i].projectName = data[i].projectName.toUpperCase();
             data[i].teamSize = data[i].teamSize * 100;
           }
           return data;
    })) ;
    return this.myObservable;
  }

  // Complete response to be sent to subscriber
  getAllProjectfromBackend1():Observable<HttpResponse<any>> 
  {
    return this.httpClient.
    get('http://localhost:3000/projects', {
    headers: new HttpHeaders({"Authorization": "abc"}),  
    observe: "response"
   });   
    
  }

  insertProject(newProject: Project) : Observable<Project>
  {
    return this.httpClient.post<Project>(this.URI, newProject);
  }

  updateProject(existingProject: Project) : Observable<Project>
  {
    return this.httpClient.put<Project>(this.URI, existingProject, 
                      { responseType: "json" });
  }


  deleteProject(ProjectID: number) : Observable<string>
  {
    return this.httpClient.delete<string>("http://localhost:3000/projects?ProjectID=" + ProjectID);
  }

}
