import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { CommentsModule } from '../comments/comments.module';
import { PostOnUserProfileComponent } from './components/post-on-user-profile/post-on-user-profile.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent,
    AddNewPostComponent,
    PostOnUserProfileComponent,
  ],
  imports: [SharedModule, PostsRoutingModule, CommentsModule],
  exports: [PostOnUserProfileComponent],
})
export class PostsModule {}
