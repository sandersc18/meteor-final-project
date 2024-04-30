import React from 'react';
import RenderPost from './RenderPost.js';
import props from 'prop-types';

/* export default class TopicList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length === 0){
      return (
        <p>Add a new topic to get started</p>
      );
    } else {
      return this.props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post}/>
      });
    }

  }
  render(){
    return (
      <>
        {this.renderAllPosts()}
      </>
    )
  }

}; */

export const TopicList = (props) => {

    if (props.passed_posts.length === 0 ){
      return (
      <div>
        <p>Add a new topic to get started</p>
      </div>
      );
    } else {
      let postInfo = props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post}/>
      });
      return postInfo;
    }


  
};