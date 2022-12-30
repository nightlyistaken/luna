import { Command, CommandContext } from '../deps.ts';

export default class InviteCommand extends Command {
  name = 'invite';
  execute(ctx: CommandContext) {
    ctx.message.channel.send(
      `Invite me to your server: https://discord.com/oauth2/authorize?client_id=${ctx.client.user?.id}&scope=bot&permissions=8`,
    );
  }
}
