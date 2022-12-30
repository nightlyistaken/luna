import { CommandClient } from '../deps.ts';
export default function readyHandler(client: CommandClient) {
  client.on('ready', () => {
    console.log(`Ready! User: ${client.user?.tag}`);
    console.log(`Avatar URL: ${client.user?.avatarURL('png')}`);\

    let isTimerOver = true;
    
    setInterval(() => {
      if (isTimerOver) {
        client.setPresence({
          activity: {
            name: 'commands | !help | !ping | !invite',
            type: 'LISTENING',
          },
        });
      } else {
        client.setPresence({
          activity: {
            name: 'MIAU on loop!',
            type: 'LISTENING',
            url: 'https://twitch.tv/breadoonline',
          },
        });
      }

      isTimerOver = !isTimerOver;
    }, 10000);
  });
}
