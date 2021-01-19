import { UserService } from './../user.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/core/model';
import { UserRead2DataSource } from './user-read2-datasource';

@Component({
  selector: 'app-user-read2',
  templateUrl: './user-read2.component.html',
  styleUrls: ['./user-read2.component.css']
})
export class UserRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource: UserRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'userGroup', 'createdAt', 'action'];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.dataSource = new UserRead2DataSource();
    this.readUsers();
  }

  readUsers(): void {
    this.userService.read().subscribe(users => {
      this.dataSource.data = users
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  confirmDeleteUser(id: number): void {}

  changePage(event){
    console.log(event.pageIndex)
  }
}
