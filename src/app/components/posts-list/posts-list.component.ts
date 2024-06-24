import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post, PostCategory } from '../../models/blog';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
constructor(public bs: BlogService){

}
  ngOnInit(): void {
    this.posts= this.bs.getPosts();
  }

  filter(cat? :PostCategory){
    if(!cat){ //se non scelgo una categoria specifica escono fuori tutti i post
      this.posts = this.bs.getPosts();
    }
    else{
      this.posts= this.bs.getPostByCategory(cat) //qui esce fuori il post della categoria
    }

  }
}
