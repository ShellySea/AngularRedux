import { editPost } from './../state/posts.action';
import { PostInterface } from './../state/posts.state';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/globalStore/app.state';
import { ActivatedRoute } from '@angular/router';
import { postSelectorById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editPostForm;
  postId: number;
  formData: any;
  hit: boolean = false;
  constructor(private _fb: FormBuilder,
    private _actR: ActivatedRoute,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this._actR.paramMap.subscribe(data => {
      this.hit = true;
      this.postId = +(data.get('id'));
      this._store.select(postSelectorById, { id: this.postId }).subscribe(data => {
        this.formData = data;
        if (data) {
          this.editPostForm = this._fb.group({
            title: [this.formData.title, [Validators.required]],
            description: [this.formData.description, [Validators.required]]
          })
        } else {
          this.editPostForm = this._fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]]
          })
        }
      });
    });
    if (!this.hit) {
      console.log('Print')
    }
  }

  onSubmit() {
    const post: PostInterface = {
      id: this.postId,
      title: this.editPostForm.value.title,
      description: this.editPostForm.value.description
    }

    this._store.dispatch(editPost({ postEData: post }));
  }
}
