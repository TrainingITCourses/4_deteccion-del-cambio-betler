import { Component, OnInit } from '@angular/core';
import { Launch } from './store/models/launch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from './store/models/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  private launchesUrl = 'assets/data/launches.json';
  title = 'speed';
  private launches: Launch[];
  private statuses: Status[];
  public filteredLaunches: Launch[];

  constructor(private http: HttpClient) { }

  public onSearch(event) {
    var aux = this.launches;

    // Filter by estado
    if (event.estado != "") {
      aux = aux.filter((launch) => launch.status == event.estado);
    }

    // Filter by agencia

    // Filter by tipo

    this.filteredLaunches = aux;
  }

  ngOnInit(): void {
    // Cachea todos los lanzamientos
    this.http.get<Response>(this.launchesUrl).subscribe((res: Response) => {
      this.launches = res['launches'];
    });
  }
}
