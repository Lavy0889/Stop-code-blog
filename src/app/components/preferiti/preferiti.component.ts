import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {
constructor(public bs: BlogService){
  //anche lui deve accedere ai servizi perchè deve far vedere come si modifica l'array
}
}
