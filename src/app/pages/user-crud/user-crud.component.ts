import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../services/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  listUsers: User[] = [];

  constructor(private usersService: UsersService){
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
  }

  ngOnInit(){
    this.getListUsers();
  }

  getListUsers(){
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {
        console.log('Lista de usuários firebase ', response)
        this.listUsers = response;

        this.dataSource = new MatTableDataSource<any>(this.listUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: error => console.log(error)
    });
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
