import { Component } from '@angular/core';
import { pregunta2 } from './post2';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta2Service } from './post2.service';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  post: pregunta2[] = [];
  displayedColumns: string[] = ["Id", "Name", "Status", "Species"];

  constructor(private postService: Pregunta2Service,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.postService.getHumanCharacters()
    .subscribe((data) => {
      console.log(data);
      this.post = data;
    })
  }
  onNavigatePostDetail(postId: string): void {
    this.router.navigate([postId], {relativeTo: this.route});
  }
  
  onNavigateCreatePost(): void{
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}
