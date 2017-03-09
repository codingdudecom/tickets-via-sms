angular.module('starter.services', [])
.service('SMSService', function() {
  this.sendSMS = function(number, message) {
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    };
})
.service('TicketService', function(SMSService) {
  this.buy =function(type){
    SMSService.sendSMS(
      "7458",type);
  };
});
