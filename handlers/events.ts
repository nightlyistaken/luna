import { CommandClient } from '../deps.ts';
import readyHandler from '../events/ready.ts';
// this isnt the best way to do this, but it works for now lol

interface EventHandlerOptions {
  client: CommandClient;
}

export default function eventHandler(options: EventHandlerOptions) {
  readyHandler(options.client);
}
