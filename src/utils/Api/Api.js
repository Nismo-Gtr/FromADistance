import React, { Component } from 'react';
import axios from 'axios';

var headlines = 'top-headlines?';

class API extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null
        }
    }
    
    async componentDidMount() {
        var id = {};
        await axios.get('https://newsapi.org/v2/' +
            headlines +
            'country=us&' +
            'apiKey=246c3cfc9c594de5b3c22e788822f27a')
            .then(function (response) {
                id = response.data.articles
            })
        this.setState({data: id})
    }
    // getQuestions: async function() {
    //     return await axios.get('https://newsapi.org/v2' + headlines + 'country=us&apiKey=246c3cfc9c594de5b3c22e788822f27a')
    //     }

    render() {
      return (
          <div>
              <API news={this.props.data}></API>
          </div>
        )
    }
}

export default API; 
