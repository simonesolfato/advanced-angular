import { Component } from '@angular/core';

import * as Immutable from "immutable";

@Component({
  selector: 'app-immutability',
  templateUrl: 'immutability.component.html'
})
export class ImmutabilityComponent {

  movie: any;
  movieJSON: string;

  constructor() {
    this.setMovie(true);
  }

  setMovie(toJson: boolean = false) {
    this.movie = Immutable.fromJS({
      name: 'Star Wars',
      episode: 7,
      actors: [
        { name: 'Daisy Ridley', character: 'Rey' },
        { name: 'Harrison Ford', character: 'Han Solo' }
      ],
      mpaa: {
        rating: 'PG-13',
        reason: 'sci-fi action violence'
      }
    });

    if (toJson) {
      this.movieToJSON();
    }
  }

  setMovieMap() {

    // let movie = Immutable.Map({
    let movie: any = Immutable.Map({
      name: 'Star Wars',
      episode: 7,
      actors: [
        { name: 'Daisy Ridley', character: 'Rey' },
        { name: 'Harrison Ford', character: 'Han Solo' }
      ],
      mpaa: {
        rating: 'PG-13',
        reason: 'sci-fi action violence'
      }
    });

    movie.get('actors').pop();
    movie.get('mpaa').rating = 'PG';

    this.movieJSON = JSON.stringify(movie.toObject());
  }

  setMovieFromJS() {

    this.setMovie();

    this.movie.get('actors').pop();
    this.movie.get('mpaa').rating = 'PG';

    this.movieToJSON();
  }

  removeActor() {
    this.movie = this.movie.update('actors', actors => actors.pop());
    this.movieToJSON();
  }

  changePG() {
    this.movie = this.movie.setIn(['mpaa', 'rating'], 'PG');
    this.movieToJSON();
  }

  deletePG() {
    this.movie = this.movie.delete('mpaa');
    this.movieToJSON();
  }

  filterActors() {

    let actors = Immutable.Map({
      'Daisy Ridley': true,
      'Harrison Ford': true,
      'Mark Hamill': false
    });

    let myActors = actors.reduce((providedFeatures, provided, feature) => {
      if (provided) {
        providedFeatures.push(feature);
      }
      return providedFeatures;
    }, []);

    this.movieJSON = JSON.stringify(myActors);
  }

  movieToJSON() {
    this.movieJSON = JSON.stringify(this.movie.toObject());
  };

}
