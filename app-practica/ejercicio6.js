
function myAssistant(time,callbackFunc){
    console.log('I am your personal assistant, and I am happy to help with your request');

    callbackFunc(time)
};


function setAlarm(time){
    return console.log(`Your alarm has been set for ${time}`)
}


myAssistant('6pm', setAlarm);