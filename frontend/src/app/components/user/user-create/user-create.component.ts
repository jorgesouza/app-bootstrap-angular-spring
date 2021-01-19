import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { User, UserGroup } from 'src/app/core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = new User();
  userGroup = new UserGroup();

  userGroups: UserGroup[] = [
    {id: 'ADMINISTRADOR', name: 'Administrador'},
    {id: 'FINANCEIRO', name: 'Financeiro'}
  ];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuário criado');
      this.router.navigate(["/users"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/users"]);
  }

}
