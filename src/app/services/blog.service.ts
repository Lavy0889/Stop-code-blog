import { Injectable } from '@angular/core';
import { Blog, Post, PostCategory } from '../models/blog';
import { BLOG } from '../../data/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
insiemeDiTuttiIDati: Blog = BLOG;

preferiti:Post[] = [];

selectedCategory?: PostCategory;

getPosts(){
  this.selectedCategory= undefined;
  return this.insiemeDiTuttiIDati.posts;
}

getPostByCategory(category: PostCategory){
  this.selectedCategory= category;
  return this.insiemeDiTuttiIDati.posts.filter(x => x.category == this.selectedCategory!.id);
}

getCategories(){
  return this.insiemeDiTuttiIDati.postCategories;
}

aggiugniAPreferiti(post: Post) {
  let p = this.preferiti.find(x=> x.id== post.id);
  if(!p){ //se p è undefined
    this.preferiti.push(post);
  }
}

rimuoviDaPreferiti(post: Post){
  let p = this.preferiti.find(x=> x.id== post.id);
  if(p){ //se esiste p 
    this.preferiti.splice(this.preferiti.indexOf(p), 1);
  }
}


svotaPreferiti(){
  this.preferiti= []; //preferiti uguale ad array vuota
}

}
