import React from 'react';
import { render } from 'react-dom'; 
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import {UP_Collection_Access}
        from './../imports/api/user_posts.js';
import {App} from './../imports/ui/App.js';
import {Signup} from './../imports/ui/Signup.js';
import {Login} from './../imports/ui/Login.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from './../imports/ui/RouteDecisions.js';
import {NotFound} from './../imports/ui/NotFound.js';

let allPostsInDB = UP_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
let title = '441 final project';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path="/App" element={<PrivateRoute><App passedPropTitle={title} passedPropModerator={'Hopper'} passedPropAllPosts={allPostsInDB} /></PrivateRoute>} />
      <Route path="*" element={<PublicRoute><NotFound /></PublicRoute>} />     
    </Routes>
  </BrowserRouter>
)
Meteor.startup(() =>  {

  Tracker.autorun(() => {

    
    
    render(routes, document.getElementById('content'));

  });

});
