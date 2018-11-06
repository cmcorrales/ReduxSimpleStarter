import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = {
    term: '',
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({
      term: ''
    });
  }

  render() {
    return(
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input placeholder='Get a 5 day forecast in your favorite cities.' className='form-control' value={this.state.term} onChange={this.onInputChange}/>
        <span className='input-group-button'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
