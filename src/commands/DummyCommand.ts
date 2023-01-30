import { CommandInterface } from 'core/interfaces/Command.interface';

export class DummyCommand implements CommandInterface{

  static description: string = 'Dummy command';

  execute(): any {
    return 'Hi';
  }
}
