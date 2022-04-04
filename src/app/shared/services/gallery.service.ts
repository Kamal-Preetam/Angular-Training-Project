import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppURLconstants } from '../models/app-url-constants.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private httpService: HttpClient) {}
  getAllPhotosByURL(pageNumber: number, limit: number): Observable<any> {
    return this.httpService.get(
      AppURLconstants.ALL_PHOTOS + `?page=${pageNumber}&limit=${limit}`
    );
  }
}
