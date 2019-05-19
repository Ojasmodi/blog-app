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
 //  public currentBlog1;
  public myBlogId;
  public possibleCategories= ["Comedy", "Drama", "Action", "Technology"];

  constructor(
    private toastr: ToastrService,
    public _route: ActivatedRoute,
    public router: Router,
    public blogService: BlogService,
    public blogHttpService: BlogHttpService) { }


  ngOnInit() {
    this.myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(this.myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogById(this.myBlogId).subscribe(
      data => {
        this.currentBlog = data['data'];
        console.log(data['data']);
      },
      error => {
        console.log(error.errorMessage);
      }
    )
    console.log(this.currentBlog.title);
  }

  editThisBlog(): any {
    // console.log(this.currentBlog.title);
    // console.log(this.currentBlog.blogId)
    this.blogHttpService.editBlog(this.myBlogId, this.currentBlog).subscribe(

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
      }
    )
  }

}
