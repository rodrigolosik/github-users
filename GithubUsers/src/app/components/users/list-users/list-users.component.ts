import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users: any[] = [];
  public form: FormGroup;
  public mode = 'list';

  constructor(
    private service: DataService,
    private fb: FormBuilder
    ) {
        this.form = this.fb.group({
          username: ['', Validators.compose([
            Validators.required,
            Validators.minLength(3)]
          )]
        });
        this.users = this.service.loadData();
      }

  ngOnInit(): void { }

  submit(): void{
    this.service.getUser(this.form.value.username).subscribe((data: any) => {
      this.service.saveUser(data);
      this.clear();
      this.users = this.service.loadData();
      this.changeMode('list');
    });
  }

  changeMode(mode: string): void {
    this.mode = mode;
  }

  clear(): void{
    this.form.reset();
  }
}
