import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../movies.service';
import { Cast, Person } from '../interfaces/movies';

@Component({
  selector: 'mf-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  person: Person;
  movies: Array<Cast>;
  constructor(private _moviesSerice: MoviesService, private router: ActivatedRoute, ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesSerice.getPersonDetail(id).subscribe(person => {
        this.person = person;
      });
      this._moviesSerice.getPersonCast(id).subscribe(res => {
        this.movies = res.cast;
      });
    });
  }

}
