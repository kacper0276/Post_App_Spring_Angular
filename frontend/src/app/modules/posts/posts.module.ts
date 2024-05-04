import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponentComponent } from './components/comments-component/comments-component.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent,
    CommentsComponentComponent,
  ],
  imports: [SharedModule, PostsRoutingModule],
})
export class PostsModule {}
