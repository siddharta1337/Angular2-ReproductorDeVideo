import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer')
  videoPlayer: any;
  duracion: string;
  progreso: number;
  posicion: string;


  videoInfo: any;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }


  ngOnInit() {

    this.route.params.subscribe(params => {

      this.id = params.videoID;

      this.obtenerInfoVideo();
    });

  }

  obtenerInfoVideo(): void {

    this.http.get('http://localhost/API/info-video.php?id=' + this.id)
      .subscribe((res) => {
        console.log(res)
        this.videoInfo = res[0];
      });


  }


  reproducirVideo(): void {

    this.videoPlayer.nativeElement.play();
  }


  detenerVideo(): void {
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
  }

  pausarVideo(): void {
    this.videoPlayer.nativeElement.pause();
  }

  onMetadata(e, video): void {

    const minutos = Math.floor(video.duration / 60);
    const segundos = Math.floor(video.duration);

    this.duracion = minutos + ':' + segundos;


  }


  onTimeUpdate(e, video): void {

    this.progreso = Math.floor((video.currentTime / video.duration) * 100);


    const minutos = Math.floor(video.currentTime / 60);
    const segundos = Math.floor(video.currentTime);

    this.posicion = minutos + ':' + segundos;

  }


}
