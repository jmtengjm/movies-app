import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MoviesList from './pages/MoviesList'
import React, { Component } from 'react'

class MoviesUpdate extends Component {
	    render() {
		            return (
				                <div>
				                    <p>In this page you'll see the form to update the movies</p>
				                </div>
				            )
		        }
}

export default MoviesUpdate
import MoviesInsert from './pages/MoviesInsert'
import MoviesUpdate from './pages/MoviesUpdate'

export { MoviesList, MoviesInsert, MoviesUpdate }

ReactDOM.render(<App />, document.getElementById('root'))


