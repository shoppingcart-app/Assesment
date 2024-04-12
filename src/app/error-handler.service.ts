// error-handler.service.ts

import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }

  handleError(error: any): void {
    console.error('An error occurred:', error); // Log the error
    // Additional error handling logic can be added here, such as displaying error messages to the user.
  }
}
