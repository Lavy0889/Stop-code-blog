import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-preview',
  templateUrl: './posts-preview.component.html',
  styleUrl: './posts-preview.component.css'
})
export class PostsPreviewComponent {
  @Input()
post?: Post;

constructor(public bs: BlogService) {
  
} //bs: è blog service
}
