import { Meteor } from 'meteor/meteor';

import '../imports/startup/server';



Meteor.startup(() => {
    Accounts.loginServiceConfiguration.remove({
        service : 'twitter'
    });

    Accounts.loginServiceConfiguration.insert({
        service     : 'twitter',
        consumerKey : Meteor.settings.twitterApp.consumer.key,
        secret      : Meteor.settings.twitterApp.consumer.secret
    });


});
