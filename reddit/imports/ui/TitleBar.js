import React from 'react';
import props from 'prop-types';

// need to export TitleBar class
/* export default class TitleBar extends React.Component{
  renderModerator(){
    if(this.props.moderator){
      return <p>moderator: {this.props.moderator}</p>
    } else {
      return <p>moderator: unknown</p>
    }
  }
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderModerator()}
      </div>
    );
  }
}; */

export const TitleBar = (props)=>{
  
const renderModerator = () =>{

 if (props.moderator){
    return <p>moderator: {props.moderator}</p>
  } else {
    return <p>moderator: unknown</p>
  }
}


return(
  <div>
    <h1>{props.title}</h1>
    {renderModerator()}
  </div>
)
}
