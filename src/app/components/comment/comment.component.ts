import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:IComment|undefined;
  constructor() { }

  ngOnInit(): void {
    console.log("Creating Comment Component")
  }
  ngOnDestroy(): void {
     console.log( "Destroying Comment Component");
  }
}
