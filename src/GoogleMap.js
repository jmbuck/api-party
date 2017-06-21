import React, { Component } from 'react'
import { mapsKey } from './keys'

class GoogleMap extends Component {
    constructor(props) {
        super(props)        
        this.state = {
            url: ''
        }
    }

    componentWillMount() {
         this.setUrl(this.props.match.params.place)
    }

    setUrl = (place) => {
        this.setState({ url: `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${place}` })
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged) {
            this.setUrl(nextProps.match.params.place)
        }
    }

    render() {
        const { user } = this.state
        return (
            <div className="google-map">
                <iframe
                    width="600"
                    height="450"
                    frameBorder="0" 
                    src={this.state.url} allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default GoogleMap