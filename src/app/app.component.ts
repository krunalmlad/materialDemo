import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'materialDemo';

  userControl = new FormControl();
  userList: string[] = [ "Krunal Lad", "Nimesh Lad", "Nisharg Banker","Chandani joshi", "Palak Jain" ];
  filterUserOptions?: Observable<string[]>;

  constructor(){

  }

  ngOnInit(){
    this.filterUserOptions = this.userControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value)) 
    );
  }

  public _filter(value: string){
    const filterValue = value.toLocaleLowerCase();
    return this.userList.filter(f=> f.toLocaleLowerCase().includes(filterValue));
  }

}
