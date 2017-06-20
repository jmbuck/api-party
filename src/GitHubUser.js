import React, { Component } from 'react'
import './GitHubUser.css'

class GitHubUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                avatar_url: '',
                login: '',
                followers: '',
                following: '',
                location: '',
                html_url: '',
            }
        }
        
        this.fetchUserData(this.props.match.params.username)
    }

    fetchUserData = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged) {
            this.fetchUserData(nextProps.match.params.username)
        }
    }

    render() {
        const { user } = this.state
        return (
            <div className="github-user">
                <img src={user.avatar_url} alt="user avatar"/>
                <h2>{user.login}</h2>
                <h3>followers: {user.followers}</h3>
                <h3>following: {user.following}</h3>
                <h3>location: {user.location}</h3>
                <a href={user.html_url}>Link to {user.login}'s profile</a>

            </div>
        )
    }
}

export default GitHubUser