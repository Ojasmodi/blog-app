import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories: ["Comedy", "Drama", "Action", "Technology"];

  constructor(private toastr: ToastrService, public _route: ActivatedRoute, public router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService) { }


  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogById(myBlogId).subscribe(
      data => {
        this.currentBlog = data['data'];
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.BlogId, this.currentBlog).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog edited successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log((error.errorMessage));
        this
      }
    )
  }

}
