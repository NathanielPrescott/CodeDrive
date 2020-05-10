import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogLoginComponent, dialogConfig);
  }

  ngOnInit(): void {}

}
