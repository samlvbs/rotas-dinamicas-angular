import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostsListResponse } from "../types/posts-list-response";
import { IPost } from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})

export class PostsListServices{
  private readonly _http = inject(HttpClient)

  //Traz todos os posts de 1 usuario
  getUserPosts(userId: string): Observable<PostsListResponse>{
    return this._http.get<PostsListResponse>('https://jsonplaceholder.typicode.com/posts?userId='+userId)
  }

  //Traz uma unica postagem
  getPost(postId: string): Observable<IPost>{
    return this._http.get<IPost>('https://jsonplaceholder.typicode.com/posts/'+postId)
  }
}
