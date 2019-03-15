import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  constructor(private location : Location, private toastr: ToastrService, public _route: ActivatedRoute, public router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService) { }

  ngOnInit() {
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

  deleteMyBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.BlogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog deleted successfully');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log((error.errorMessage));
        this
      }
    )
  }

  public goBackToPreviousPage(){
    this.location.back();
  }





}
