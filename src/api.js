import React from 'react'
import './api.css'
import apiLogo from "./images/logo.png"

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            ids: []
        }
    }
    componentWillMount() {
        var request = new XMLHttpRequest()
        request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
        var that = this
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(this.response)
                const movies = data.map((movie, index) => {
                    var movies = [];
                    return movies.concat(movie)
                })
                that.setState({
                    movies: movies
                })
            } else {
                console.log('request error!')
            }
        }


        request.send()
    }

    renderMovieTitle() {
        const movies = this.state.movies.slice()
        return (movies.map((item, index) => {
            console.log(item[0].title)
            return (
                <div className='container'>
                    <div className='card'>
                        <h1>{item[0].title}</h1>
                        <p>{item[0].description}</p>

                    </div>
                </div>

            )
        }))
    }
    render() {
        return (
            <div>
                <img src={apiLogo} alt='the logo'/>
                {this.renderMovieTitle()}

            </div>
        )
    }

}
export default Api;
