import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLoginComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}

  close() {
    this.dialogRef.close();
  }

  login() {
    console.log('Login service call');
    // Wait for service response, then display errors or
  }

  ngOnInit(): void {}
}
