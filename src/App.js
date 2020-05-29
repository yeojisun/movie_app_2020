import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))
        )}
      </section>
    );
  } // 2. api로부터 data를 fetching한 뒤에 data를 render한다.
}

export default App;
