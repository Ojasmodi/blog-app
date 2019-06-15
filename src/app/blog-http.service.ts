import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'http://blogback.myinfo.world/api/v1/blogs';
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
