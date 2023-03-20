import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = []
  message: string = ''

  constructor(
    private service: PostsService
  ) {}

  ngOnInit(): void {
    this.service.fetch().subscribe(posts => {
      this.posts = posts;
    })
  }

  add(title: string) {
    const post = { title }
    this.service.create(post).subscribe(() => {
      this.posts.push(post)
    }, err => this.message = err)
  }

  delete(id: number) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe()
    }
  }
}
