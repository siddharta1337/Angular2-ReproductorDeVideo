import { VideoPlayerComponent } from './video-player/video-player.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'lista-video' , component: ListaDeVideosComponent },
  { path: 'video-player/:videoID' , component: VideoPlayerComponent },
  { path: '' , redirectTo: 'lista-video' , pathMatch: 'full' },
  { path: '**' , component: ListaDeVideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
