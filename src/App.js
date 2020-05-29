import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // async는 비동기 함수라는 것을 의미함.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false }); // {movies:movies}를 단축해서 {movies}라고 써도 된다.
  };
  componentDidMount() {
    this.getMovies();
    // setTimeout(()=> {
    //   this.setState({isLoading : false});
    // }, 6000); // 6초뒤에 isLoading state값이 false가 된다.
  } // 1. componentDidMount에서 data를 fetch한다.
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              /> // 이 곳에서 보내주는 값과 받아야 하는 값이 꼭 일치하지 않는다. (Movie.js에서는 id값을 받지 않음. 그래도 키값은 꼭 보내줘야 한다.)
            ))}
          </div>
        )}
      </section>
    );
  } // 2. api로부터 data를 fetching한 뒤에 data를 render한다.
}

export default App;
