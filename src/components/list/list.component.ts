import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { IPost } from '../../models/post.model';
import { AuthorDetailsComponent } from '../author-details/author-details.component';

@Component({
  selector: 'app-list',
  imports: [AuthorDetailsComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  private postService = inject(PostService);
  private userService = inject(UserService);

  posts = this.postService.posts;
  selectedUser = this.userService.selectedUser;

  constructor() {
    this.postService.loadPosts();
  }

  onSelect(post: IPost): void {
    this.userService.loadUser(post.userId);
  }
}
