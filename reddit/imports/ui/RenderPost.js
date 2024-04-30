import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import props from 'prop-types';


/* export default class RenderPost extends React.Component{

  render(){
    return (
      <>
        <p key={this.props.post_prop_obj._id}>
          
          <button onClick={() => { 
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: 1}})
          }}>+1</button>
          <button onClick={() => {
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: -1}})
          }}>-1</button>
          <button onClick={() => {
            UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
          }}>X</button> {''}
          {this.props.post_prop_obj.topic} has {this.props.post_prop_obj.votes} vote[s]
        </p>
      </>
    );
  }
}; */

export default RenderPost = (props) => {
  
  return (
    <>
      <p key={props.post_prop_obj._id}>
      <button onClick={() => { 
            UP_Collection_Access.update({_id: props.post_prop_obj._id}, {$inc: {votes: 1}})
          }}>+1</button>
          <button onClick={() => {
            UP_Collection_Access.update({_id: props.post_prop_obj._id}, {$inc: {votes: -1}})
          }}>-1</button>
          <button onClick={() => {
            UP_Collection_Access.remove({_id: props.post_prop_obj._id})
          }}>X</button> {''}
          {props.post_prop_obj.topic} has {props.post_prop_obj.votes} vote[s]
      </p>
    </>
  );
}