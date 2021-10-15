import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/globalStore/app.state';
import { addPost } from '../state/posts.action';
import { PostInterface } from '../state/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm;

  constructor(private _fb: FormBuilder,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this.addPostForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  get formTitle() {
    return this.addPostForm.get('title');
  }

  get formDesc() {
    return this.addPostForm.get('description');
  }

  onSubmit() {
    // console.log(this.addPostForm.value);
    // let newPost = { ...this.addPostForm.value, id: 4 };
    const post = {
      title: this.addPostForm.value.title,
      description: this.addPostForm.value.description,

    }
    this._store.dispatch(addPost({ postData: post }));
  }

}
