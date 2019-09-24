import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable()
export class ErrorDialogService {
 
  constructor(public dialog: MatDialog) { }
  openDialog(data): any {
    alert(data);
  }
}
