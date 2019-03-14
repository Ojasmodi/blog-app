import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  // tslint:disable-next-line: variable-name
  constructor(public _route: ActivatedRoute, public router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService) { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogHttpService.getSingleBlogById(myBlogId).subscribe(
      data => {
        this.currentBlog = data['data'];
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }



}
