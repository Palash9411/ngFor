import { Component, OnInit } from '@angular/core';
import { CommentService, IComment } from 'src/app/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments();
  }
  refresh()
  {
    this.commentService.getComments();
  }
  trackByCommentId(index:number,comment:IComment){
    return comment.id;
  }

}
