import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { PhotoComponent } from './components/photo/photo.component';
import { VoteRoutingModule } from './vote-routing.module';
import { NgPipesModule } from 'ngx-pipes';



@NgModule({
  declarations: [
    VoteComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    VoteRoutingModule,
    NgPipesModule
  ]
})
export class VoteModule { }
