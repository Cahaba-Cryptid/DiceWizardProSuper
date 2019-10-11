const SlackBot = require('slackbots');


const bot = new SlackBot({
    token: 'xoxb-672075882081-790988243172-SYncQXRJv9Cp9e0eMOUTK0CH',
    name: 'dicewizardprosuper'
});

//Start handler

bot.on('start', () => {
    const params = {
        icon_emoji: ':partywizard:'
    }

    bot.postMessageToChannel('general', 'Behold my power!', params);

});

//Error handling
bot.on('error', (err:any) => console.log(err));

//message handler
bot.on('message', (data:any) => {
    if(data.type !== 'message') {
        return;
    }



    console.log(data);
})

function rollDice(a, b, c?) {
    
    
    return a * b
};

console.log(rollDice(2,2));

