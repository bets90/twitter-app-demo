import { Tasks } from './tasks.js';
import { Meteor } from 'meteor/meteor';

Twit = Meteor.npmRequire('twit');

 T = new Twit ( {
    consumer_key: Meteor.settings.twitterApp.consumer.key,
    consumer_secret: Meteor.settings.twitterApp.consumer.secret,
    access_token: Meteor.settings.twitterApp.access_token.key,
    access_token_secret: Meteor.settings.twitterApp.access_token.secret
});

Meteor.methods({
    'postTweet'(tweetText) {
        if(Meteor.user()) { //check if user is logged in
            console.log("text is: ", tweetText);
            T.post('statuses/update',
                {
                    status: tweetText
                },
                Meteor.bindEnvironment(function (err, data, response) {
                    console.log(data);
                    Tasks.insert({
                        data,
                        createdAt: new Date()
                    })
                })
            );
        }
        else {
            console.log("not logged in");
        }
    }

});
