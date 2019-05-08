import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'http://localhost:3000/api/v1/blogs';
  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: quotemark
  // tslint:disable-next-line: max-line-length
  // public accessToken = `ZjZiNzE4ZWRjNDVjODZiMzA0ZDE0MDM4NTcwOTc2OGVjZGRkNzA4MzAxMzdhYzdlZDg0YjQ2ODJlMWZjOTVkZjY5MzdlODhlYWJiMTlkNjc5OTQwZDA1OGZkOTNmNTI3NjNmZTllMWJiNGY5N2Q4MTVhYTViOWI2ZGQxOWZiNDEyYg==`;
  public accessToken= 'Admin';
  constructor(private _http: HttpClient) { }

  getAllBlogs(): any {
    const response = this._http.get(this.baseUrl + '/all?authToken=' + this.accessToken);
    return response;
  }

  getSingleBlogById(currentBlogId): any {
    const response = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.accessToken);
    return response;
  }

  createBlog(blogData): any {
    const response = this._http.post(this.baseUrl + '/create/?authToken=' + this.accessToken, blogData)
    return response;
  }

  deleteBlog(blogId): any {
    const data = {};
    const response = this._http.post(this.baseUrl + '/' + blogId + '/delete?authToken=' + this.accessToken, data);
    return response;
  }

  editBlog(blogId, blogData): any {
    const response = this._http.put(this.baseUrl + '/' + blogId + '/edit?authToken=' + this.accessToken, blogData)
    return response;
  }
}
