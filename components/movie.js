import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "./Image";

class Movie extends Component {
  prefetchMoviePage = () => {
    Router.prefetch(`/movie?id=${this.props.id}`);
  };

  render() {
    const { movie } = this.props;
    console.log("Inside Movie");
    console.log(this.props);
    Array.from(movie).map(movieData => {
      return (
        <Link as={`/movie/${movieData.id}`} href={`/movie?id=${movieData.id}`}>
          <div
            className="card"
            id={`movie-${id}`}
            onMouseEnter={this.prefetchMoviePage}
          >
            <div className="card-image">
              <Image
                src={movieData.images[0].url}
                alt={`Poster for title`}
                className="img-responsive"
              />
            </div>
            <div className="card-header">
              <div className="card-title h5 text-primary text-ellipsis">
                {movieData.title}
              </div>
              <div className="card-body text-ellipsis">Overview</div>
            </div>
          </div>
        </Link>
      );
    });
  }
}

export default Movie;
