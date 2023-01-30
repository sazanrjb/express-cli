import { commands } from 'commands';
import { ERROR_COLOR, SUCCESS_COLOR } from 'config/message-colors';

export class CommandHandler {
  private args: Array<string>;

  setArgs(args = []) {
    this.args = args;

    return this;
  }

  execute(): any {
    const command = this.args[2];

    if (!command) {
      console.log(SUCCESS_COLOR, 'Here are the list of commands:');

      const commandsList = [];
      for (const [index, command] of Object.entries(commands)) {
        commandsList.push({
          signature: index,
          description: command.description
        })
      }

      console.table(commandsList);
      process.exit();
    }

    if (!commands[command]) {
      console.log(ERROR_COLOR, 'Invalid command provided');
      process.exit();
    }

    commands[command].prototype.execute();
  }
}
