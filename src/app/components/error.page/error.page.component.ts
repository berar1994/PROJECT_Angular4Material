import { Component, OnInit } from '@angular/core';
import { ErrorType } from './error.type.enum';
import { ErrorTitle } from './error.title';
import { ErrorCause } from './error.cause';
import { ActivatedRoute } from '@angular/router';
import { JsonUtil } from '../../utils/json.util';

@Component({
  selector: 'app-error-page',
  templateUrl: './error.page.component.html',
  styleUrls: ['./error.page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorType: number = ErrorType.NOT_FOUND;
  errorTitle: string = ErrorTitle.PAGE_NOT_FOUND;
  errorCause: string = ErrorCause.PAGE_NOT_FOUND;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (!JsonUtil.isEmpty(params)) {
          this.errorType = params.type;
          this.errorTitle = params.title;
          this.errorCause = params.cause;
        }

      });
  }

  setError(title: string, cause: string, type: number) {
    this.errorTitle = title;
    this.errorCause = cause;
    this.errorType = type;
  }

}
