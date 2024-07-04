import { Component } from '@angular/core';
import { pregunta3 } from './post3';
import { Pregunta3Service } from './post3.service';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  post : pregunta3[] = [];
  displayedColumns: string[] = ['id','email','body'];

  constructor(private postService:Pregunta3Service) {

  }
  ngOnInit(): void {
    this.postService.getFilteredComments()
    .subscribe((data) => {
      console.log(data)
      this.post = data;
    })
  }
}
