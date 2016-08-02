import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tweets/tasks.js';

import './body.html';


Template.tweetinput.helpers({
    logs ()
        {
             console.log(Tasks.find().fetch());
        }
});


Template.tweetinput.events ({
  'submit .newtweet'(event,template) {
      // Prevent default browser form submit
   event.preventDefault();
   const target = event.target;
   const text = target.tweet.value;
   console.log(target.tweet.value);
   var selected_element = template.find('input:radio[name=twtype]:checked');
   console.log(selected_element.value);
      if (selected_element.value ==='text') {
          Meteor.call('postTweet', text);
      }
      else if (selected_element.value ==='photo') {

      }
      else if (selected_element.value ==='video'){

      }

   target.tweet.value = '';
 }
});
