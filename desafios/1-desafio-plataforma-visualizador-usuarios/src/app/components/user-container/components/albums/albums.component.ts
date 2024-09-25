import { Component, inject, Input, OnInit } from '@angular/core';
import { AlbumListService } from '../../../../services/albums-list.service';
import { Observable, of } from 'rxjs';
import { IAlbum } from '../../../../interfaces/album.interface';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  albumsList$ : Observable<IAlbum[]> = of([]);

  private readonly _albumService = inject(AlbumListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    //Atraves do ActivatedRoute conseguimos buscar o value = userId da rota pai
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.albumsList$ = this._albumService.getUserAlbums(params['userId'])
    )
  }
}
