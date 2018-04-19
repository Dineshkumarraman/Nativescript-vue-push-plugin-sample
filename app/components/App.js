const Counter = require('./Counter');
const Vue = require('nativescript-vue');
// var pushPlugin = require("nativescript-push-notifications");


module.exports = {
  data() {
    return {
    
    };
  },
  created() {
    this.registerPushNotification()
  },
  template: `
    <Page class="page">
      <ActionBar class="action-bar" title="NativeScript-Vue"/>
  
      <StackLayout>
        <Counter />
      
        <Label class="p-20" textWrap=true text="This is a hello world application, tap the button if you dare"/>
      
        <Button class="btn btn-primary" @tap="surprise = !surprise" text="Tap me!"/>
        <Image v-if="surprise" class="m-20" src="~/images/NativeScript-Vue.png"/>
      </StackLayout>
    </Page>
  `,
  components: {
    Counter,
  },
  methods: {
    registerPushNotification() {
      
    }
    
  },
};


// // Define a new component called button-counter
// Vue.component('registerNotification', {
//   data: function () {
//     return {
//       iosSettings = {
//         badge: true,
//         sound: true,
//         alert: true,
//         interactiveSettings: {
//             actions: [{
//                 identifier: 'READ_IDENTIFIER',
//                 title: 'Read',
//                 activationMode: "foreground",
//                 destructive: false,
//                 authenticationRequired: true
//             }, {
//                 identifier: 'CANCEL_IDENTIFIER',
//                 title: 'Cancel',
//                 activationMode: "foreground",
//                 destructive: true,
//                 authenticationRequired: true
//             }],
//             categories: [{
//                 identifier: 'READ_CATEGORY',
//                 actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
//                 actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
//             }]
//         },
//       },
//       notificationCallbackIOS: function (data) {
//           alert("message", "" + JSON.stringify(data));
//       }
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
//   methods: {
//     registerPushNotification() {
//       pushPlugin.register(iosSettings, function (data) {
//         alert("Device registered. Access token" + data);
//         // Register the interactive settings
//         if(iosSettings.interactiveSettings) {
//             pushPlugin.registerUserNotificationSettings(function() {
//                 alert('Successfully registered for interactive push.');
//             }, function(err) {
//                 alert('Error registering for interactive push: ' + JSON.stringify(err));
//             });
//         }
//       }, function() { });
//     },
    
//   },




// })

// Vue.components ({
  



// })