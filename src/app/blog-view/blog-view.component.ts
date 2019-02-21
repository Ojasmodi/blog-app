import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  // tslint:disable-next-line: variable-name
  constructor(public _route: ActivatedRoute, public router: Router, public blogService: BlogService) { }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogService.getSingleBlogById(myBlogId);
  }



}
