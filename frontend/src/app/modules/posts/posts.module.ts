import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent,
    AddNewPostComponent,
  ],
  imports: [SharedModule, PostsRoutingModule, CommentsModule],
})
export class PostsModule {}
