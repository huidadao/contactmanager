import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      })
    );
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log('UNSAFE_componentWillReceiveProps...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'somthing'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    console.log(title, body);

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;