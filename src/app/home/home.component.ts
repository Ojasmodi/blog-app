import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs = [];
  //public odd=[];
  //public even=[];
  /*public card_class = {
    "panel":true,
    "panel-default":true,
    "border":true,
    "border-info":true,
    "text-white":true,
    "bg-danger":true,
    "bg-dark":true
  }*/
  public odd="black";
  public even="red";
  

  constructor(public blogHttpService: BlogHttpService) {
   }

  ngOnInit() {
     this.blogHttpService.getAllBlogs().subscribe(
      data => {
        this.allBlogs = data['data'];
        /*for(let i=0;i<this.allBlogs.length;i++){
          if(i%2==0){
            this.odd=this.allBlogs[i];
          }
          else{
            this.odd=this.allBlogs[i];
          }
        }*/
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

}
