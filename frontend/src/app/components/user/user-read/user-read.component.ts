import { ConfirmDialogModel, ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/core/model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[];

  displayedColumns = ['id', 'name', 'email', 'userGroup', 'createdAt', 'action']

  constructor(
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.userService.read().subscribe(users => {
      this.users = users
    });
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(() =>
      this.userService.showMessage('Usuário excluido')
    );
    this.readUsers();
  }

  confirmDeleteUser(id: number): void {
    const message = `Você tem certeza que deseja excluir?`;

    const dialogData = new ConfirmDialogModel("Exclusão de usuário", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteUser(id);
      }
    });
  }
}
