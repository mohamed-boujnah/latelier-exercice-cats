import { Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})

export class PhotoComponent {
  @Input() cat: Cat;
}
