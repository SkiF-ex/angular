import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../../core/services/loader.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean;
  subscription: Subscription[] = [];

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getLoadingState();
  }

  getLoadingState(): Observable<boolean> {
    return this.loaderService.loading$;
  }
}
