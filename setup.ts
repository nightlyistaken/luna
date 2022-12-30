console.log('Setup this project');
const token = prompt('Enter your bot token: ');
if (!token) {
  console.log('No token provided');
  Deno.exit(1);
}
// Create a .env file with the token
Deno.writeFile('.env', new TextEncoder().encode(`TOKEN=${token}`));
console.log('Setup complete\nYou can do \'deno task run\' to start the bot');
