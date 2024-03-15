import React from 'react';
import Movies from '../Movies';
import Preloader from '../Preloader';
import Search from '../Search';

export default class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=1dcf3d3c&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (string, type = 'all') => {
        fetch(
            `http://www.omdbapi.com/?apikey=1dcf3d3c&s=${string}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        const { movies } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}
