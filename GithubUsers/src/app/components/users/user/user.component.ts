import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any[] = [];
  private panelOpenState = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  remove(user: any): void {
    const data = this.service.loadData();
    const index = data.findIndex(x => x.id === user.id);

    if (index !== -1){
      data.splice(index, 1);
      this.service.saveUsers(data);
      location.reload();
    }
  }
}
