import { PostInterface } from './../state/posts.state';
import { AppState } from './../../../globalStore/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postSelector, postSelectorById } from '../state/posts.selector';
import { deletePost, editPost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostInterface[];
  constructor(private _store: Store<AppState>,
    private _router: Router) { }

  ngOnInit() {
    this._store.select(postSelector).subscribe(data => {
      this.posts = data;
    })
  }

  delete(post: PostInterface) {
    this._store.dispatch(deletePost({ postDData: post }));
    this._router.navigate(['/posts/add']);
  }

}
