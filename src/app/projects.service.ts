import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URI ="http://localhost:3000/projects";
  constructor(private httpClient : HttpClient)
  {
  }

  getAllProjects() : Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.URI);
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
