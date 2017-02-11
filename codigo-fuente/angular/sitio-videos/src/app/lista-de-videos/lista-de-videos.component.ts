import { Component, OnInit } from '@angular/core';

import {Http, Response} from '@angular/http';



@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {


  videos:Array<Object>;
  rutaServer:String;


  constructor( private http:Http) { }

  ngOnInit() {
    this.videos = [];
    this.rutaServer = 'http://localhost/API/uploads/'
    this.peticionExterna();

  }


  peticionExterna():void{

    this.http.request('http://localhost/API/lista-de-videos.php')
    .subscribe( (res:Response) => {
      this.videos = res.json();
     
    })



  }

}
