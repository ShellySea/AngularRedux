import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { POST_STATE_NAME } from './state/posts.selector';
import { postReducer } from './state/posts.reducer';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent,
        children: [
            {
                path: 'add',
                component: AddPostComponent
            },
            {
                path: 'edit/:id',
                component: EditPostComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        PostListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POST_STATE_NAME, postReducer)
    ],
    exports: [RouterModule]
})


export class PostModule {
}
