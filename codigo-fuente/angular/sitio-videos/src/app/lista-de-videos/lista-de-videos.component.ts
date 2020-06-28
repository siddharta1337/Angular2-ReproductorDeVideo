import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

  videos;
  rutaServer;

  constructor( private http: HttpClient) {
    this.rutaServer = 'http://localhost/API/uploads/';
  }

  ngOnInit(): void {
    this.videos = [];
    this.peticionExterna();
  }


  peticionExterna(){
    this.http.get('http://localhost/API/lista-de-videos.php').subscribe( ( respuesta ) => {
      this.videos = respuesta;
    });
  }

}
