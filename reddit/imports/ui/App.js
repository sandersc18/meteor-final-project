import React from 'react';
import {TitleBar} from './TitleBar.js';
import {AddTopics} from './AddTopics.js';
import {TopicList} from './TopicList.js';
import props from 'prop-types';
import {Logout} from'./Logout.js';

/* export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
        <AddTopics />
        <TopicList passed_posts={this.props.passedPropAllPosts}/>
      </>
    )
  }

}; */

export const App = (props) =>{
  return(
    <>
      <TitleBar
        title={props.passedPropModerator}/>
      <AddTopics />
      <TopicList passed_posts={props.passedPropAllPosts}/>
      <Logout />
    </>
  );
}
