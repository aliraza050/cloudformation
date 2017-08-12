var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        
        Hello This is test
        
        This is master Test
        
        THis is test3
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};
