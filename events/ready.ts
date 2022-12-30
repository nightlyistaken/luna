import { CommandClient } from '../deps.ts';
import config from '../config.json' assert { type: 'json' };

export default function readyHandler(client: CommandClient) {
  client.on('ready', () => {
    console.log(`Ready! User: ${client.user?.tag}`);
    console.log(`Avatar URL: ${client.user?.avatarURL('png')}`);

    let isTimerOver = true;

    setInterval(() => {
      if (isTimerOver) {
        client.setPresence({
          activity: {
            name: config.presence.first.name,
            type: 'LISTENING',
          },
        });
      } else {
        client.setPresence({
          activity: {
            name: config.presence.second.name,
            type: 'LISTENING',
          },
        });
      }

      isTimerOver = !isTimerOver;
    }, 10000);
  });
}
