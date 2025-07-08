import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  postService = inject(PostService);

  constructor() {
    this.postService.loadPosts();
  }
}
