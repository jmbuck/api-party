import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { spotify } from './keys'

class Spotify extends Component {
    state = {
        
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/spotify/${this.state.username}`)
    }

    authenticate = () => {
        fetch(`https://accounts.spotify.com/authorize/?client_id=${spotify.clientId}&response_type=token&redirect_uri=${spotify.redirectURI}`,
        {
             method: 'GET',
             headers: new Headers(),
             mode: 'cors',
             cache: 'default' 
        }
  
        )
            .then(response => response.json())
            .then(data => console.log(data))
    }
    
    renderForm = () => {
        <form onSubmit={this.handleSubmit}>
            <div>
                <input 
                    type="text"
                    value={this.state.song} 
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Look up song</button>
            </div>
        </form>
    }
    // <Route path='/spotify/:song' component={SpotifySong}/>
    render() {
        return (
            <div className="spotify">
                <img className="spotify-logo" src="" alt="spotify logo"/>
                <div className="auth">
                    <button type="button" onClick={this.authenticate}>Authenticate</button>
                </div>

                <Route path='/spotify' render={this.renderForm}/>
               
            </div>
        )
    }
}

export default Spotify