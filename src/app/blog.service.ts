import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "created": "2017-11-11T21:47:52.6782",
      "tags": [],
      "bodyHtml": "<h1>Hello Blog1</h1>",
      "description": "This is blog 1",
      "title": "First blog",
      "author": "Ojas"
    },
    {
      "blogId": "2",
      "created": "2017-10-18T21:47:52.6782",
      "tags": [],
      "bodyHtml": "<h1>Hello Blog2</h1>",
      "description": "This is blog 2",
      "title": "Second blog",
      "author": "modi"
    }

  ];
  constructor() {

  }

  getAllBlogs(): any {
    return this.allBlogs;
  }

  getSingleBlogById(blogId): any {
    for (let blog of this.allBlogs) {
      if (blogId === blog.blogId) {
        return blog;
      }
    }
  }


}
