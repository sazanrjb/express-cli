import { CommandInterface } from 'core/interfaces/Command.interface';
import { DB } from 'database/data-source';

export class DummyCommand implements CommandInterface{

  static description: string = 'Dummy command';

  async execute(): Promise<any> {
    DB.initialize()
      .then(async () => {
        const users = await DB
          .createQueryBuilder()
          .select()
          .from('database', null)
          .getRawMany();

        console.log(users)
      })
      .catch((error) => console.log(error))
  }
}
