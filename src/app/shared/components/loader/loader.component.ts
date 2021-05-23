import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoaderService} from '../../../core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getLoadingState();
  }

  getLoadingState(): Observable<boolean> {
    return this.loaderService.loading$;
  }
}
