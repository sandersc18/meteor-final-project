import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


/* export default class AddTopics extends React.Component{


  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      UP_Collection_Access.insert({
        topic: newTopic,
        votes: 0,
      });

    };
  }

  render(){
    return (
      <>
        <form onSubmit={this.processFormData.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>
      </>
    );
  }
}; */

export const AddTopics = (props) =>{
  const [topic_state, setTopicState] = React.useState('');
  let processFormData = (event) =>{
    event.preventDefault();
    console.log(topic_state);
    if (topic_state){
      UP_Collection_Access.insert({
        topic: topic_state,
        votes: 0,
      });
      setTopicState('');
    }

  }

  return(
    <>
      <form className='form' onSubmit={processFormData}>
        <input type='text'
            value ={topic_state}
            placeholder='Topic Name'
            onChange={event => setTopicState(event.target.value)} />
        <button>Add Topic</button>
      </form>
    </>
  )
}