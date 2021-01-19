import { HeaderService } from './../../components/templates/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) { 
      headerService.headerData = {
        title: 'Usuários',
        icon: 'face',
        routeUrl: '/users'
      }
    }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create']);
  }

}
