import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../../services/fake-backend.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public visible = false;
  public visibleAnimate = false;
  userInfo: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  originalImage: any = '';
  showCropper = false;

  constructor(private backend: FakeBackendService) {
    this.userInfo = this.backend.getUserInfo();
    this.croppedImage = (this.userInfo.profileImage ? this.userInfo.profileImage : null);
    this.originalImage = this.croppedImage;
  }

  ngOnInit() {
  }

  save() {
    this.backend.setUserInfo(
      this.userInfo.userName,
      this.userInfo.name,
      this.userInfo.surName,
      this.croppedImage
    );

    this.hide();
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image: string) {
    this.croppedImage = image;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  loadImageFailed() {
    // show message
  }

  cropImage() {
    this.imageChangedEvent = '';
    this.showCropper = false;
  }

  cancelCropImage() {
    this.imageChangedEvent = '';
    this.showCropper = false;
    this.croppedImage = this.originalImage;
  }

}
