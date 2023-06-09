import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }
  takePhoto() {
    this.photoService.takePhoto();
  
  }
  markFavourite(photo: UserPhoto){
    photo.Favourite = !photo.Favourite;
}


}