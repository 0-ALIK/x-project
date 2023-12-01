import { Component, Input } from '@angular/core';

@Component({
  selector: 'alik-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent{

    @Input('width')
    public width: string = '250px';

    @Input('height')
    public height: string = '100px';
}
