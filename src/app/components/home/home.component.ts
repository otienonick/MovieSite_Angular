import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './../../service-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any[] = []

  constructor(private apiService:ServiceApiService){
    this.getMovies();
  }

  getMovies = ()=>{
    this.apiService.getAllMovies().subscribe(
      data =>{
        this.movies = data
    
      })
  }

  ngOnInit(){
 
  }

}
