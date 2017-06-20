import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GoogleMap from './GoogleMap'
import './Maps.css'

class Maps extends Component {
    state = {
        place: ''
    }

    handleChange = (ev) => {
        const place = ev.currentTarget.value
        this.setState({ place })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/maps/${this.state.place}`)
    }

    render() {
        return (
            <div className="maps">
                <img className="maps-logo" src="http://logos-download.com/wp-content/uploads/2016/05/Google_Maps_logo_wordmark.png" alt="google maps logo"/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.place} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up place</button>
                    </div>
                </form>

                <Route exact path='/maps' render={() => <h3>Please enter a place to view with Google Maps</h3>}/>
                <Route path='/maps/:place' component={GoogleMap}/>
            </div>
        )
    }
}

export default Maps