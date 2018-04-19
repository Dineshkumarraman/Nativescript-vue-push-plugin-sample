const Vue = require('nativescript-vue');
const App = require('./components/App');

var application = require("application");

application.on(application.launchEvent, function (args) {

    var pushPlugin = require("nativescript-push-notifications");
    var iosSettings = {
        badge: true,
        sound: true,
        alert: true,
        interactiveSettings: {
            actions: [{
                identifier: 'READ_IDENTIFIER',
                title: 'Read',
                activationMode: "foreground",
                destructive: false,
                authenticationRequired: true
            }, {
                identifier: 'CANCEL_IDENTIFIER',
                title: 'Cancel',
                activationMode: "foreground",
                destructive: true,
                authenticationRequired: true
            }],
            categories: [{
                identifier: 'READ_CATEGORY',
                actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
            }]
        },
        notificationCallbackIOS: function (data) {
            // alert("message", "" + JSON.stringify(data));
            alert(JSON.stringify(data));
        }
    };

    pushPlugin.register(iosSettings, function (data) {
        console.log("++++++++++++++ inside registerPushNotification ++++++++++++++++++");
        if(iosSettings.interactiveSettings) {
            pushPlugin.registerUserNotificationSettings(function() {
            //   alert('Successfully registered for interactive push.');
            }, function(err) {
                alert('Error registering for interactive push: ' + JSON.stringify(err));
            });
        }
    }, function() { });

    var pushSettings = {
        senderID: "1060104002255", // Required: setting with the sender/project number
        notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
            var notificationBody = fcmNotification && fcmNotification.getBody();
            console.log("stringifiedData ==> ", stringifiedData);
            console.log("fcmNotification ==> ", fcmNotification);
            alert("Message received!\n" + notificationBody + "\n" + stringifiedData);
        }
    };

    pushPlugin.register(pushSettings, function (token) {
        console.log("++++++++++++++ inside registerPushNotification ++++++++++++++++++");
        console.log("token ==>" + token);

        // *** Note: ***
        //Never called when notification is tapped(App in background/closed state) 
        // pushPlugin.onMessageReceived(pushSettings.notificationCallbackAndroid); 

    }, function() { });

});

application.on(application.resumeEvent, function (args) {
    if (args.android) {
        var act = args.android;
        var intent = act.getIntent();
        var extras = intent.getExtras();
        if (extras) {
            for (var key in extras) {
                console.log(key + ' -> ' + extras[key]);
            }
            var msg = extras.get('someKey');
        }
    }
});

    
new Vue({
  render: h => h(App),
}).$start();
