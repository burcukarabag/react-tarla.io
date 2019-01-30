import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Chart from './Chart';
import { getUsers } from './actions/users-actions';
import { getPosts } from './actions/posts-actions';


class App extends Component {
	
  componentDidMount(){
      this.props.onGetUsers();
      this.props.onGetPosts();
  }

  render() {

    return (
      <div id="App" className={"container"}>
        <div className={"row"}>
          <Chart users = {this.props.users} posts = {this.props.posts} ></Chart>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {

	return state;

};

const mapDispatchToProps = {

  onGetUsers: getUsers,
  onGetPosts: getPosts
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
