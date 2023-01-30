import { CommandHandler } from 'core/CommandHandler';

const commandHandler = new CommandHandler();
commandHandler.setArgs(process.argv).execute()
