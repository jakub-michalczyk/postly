import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private http = inject(HttpClient);
  readonly posts: WritableSignal<IPost[]> = signal([]);

  loadPosts(): void {
    this.http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts) => this.posts.set(posts));
  }
}
