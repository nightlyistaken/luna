import { Command, CommandContext } from '../deps.ts';

export default class SayCommand extends Command {
  name = 'say';
  aliases = ['repeat'];
  execute(ctx: CommandContext) {
    if (ctx.message.content.length > 4) {
      ctx.message.channel.send(
        ctx.message.content.split(' ').slice(1).join(' '),
      );
    } else {
      ctx.message.channel.send('You need to provide a message to say!');
    }
  }
}
