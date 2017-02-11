import {RouterModule, Routes} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


const rutasApp = [
  { path: 'lista-video' , component: ListaDeVideosComponent  },
  { path: 'video-player/:videoID' , component: VideoPlayerComponent  },
  { path: '' , redirectTo:'lista-video', pathMatch: 'full' },
  { path:'**', component: ListaDeVideosComponent }

]
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent,
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
