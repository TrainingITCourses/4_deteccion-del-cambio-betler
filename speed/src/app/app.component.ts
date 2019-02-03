import { Component, OnInit } from '@angular/core';
import { Launch } from './store/models/launch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  private configUrl = 'assets/data/launches.json';
  title = 'speed';
  private launches: Launch[];
  public filteredLaunches: Launch[];

  constructor(private http: HttpClient) { }

  public onSearch(event) {
    //console.log(this.launches.launches);
    this.filteredLaunches = this.launches.filter((launch) => launch.name === "Vostok-K | Vostok 1");
  }

  ngOnInit(): void {
    /*
    this.http.get<Launch[]>(this.configUrl).subscribe((res: Launch[]) => {
      this.launches = res;
    });*/
    this.http.get<Response>(this.configUrl).subscribe((res: Response) => {
      this.launches = res['launches'];
    });
  }
}
