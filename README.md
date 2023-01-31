## Node CLI

Node CLI is a CLI based application for NodeJS apps. It is a standalone CLI application useful to run commands  in local or server. 

It comes with TypeORM and has capability to easily connect with the postgreSQL database.

### Register command
A command can be registered in `src/commands` file. It should contain a key and the class that should be invoked for that key.

Example:

```
export const commands = {
  dummyCommand: DummyCommand
};
```

### Write command
Commands are placed inside `commands` folder. A command should implement `CommandInterface`.

Each command has a `description` property and `execute()` method. `description` is displayed when the list of commands are shown.

```
export class DummyCommand implements CommandInterface {
  static description: string = 'Dummy command';

  async execute(): Promise<any> {
    // ...
  }
}
```

### Execute command
A command can be executed using the following command:
```
npm run cli <commandSignature>

Example:
npm run cli dummyCommand
```

To see the list of commands:
```
npm run cli
```

Output:
```
Here are the list of commands:
┌─────────┬────────────────┬─────────────────┐
│ (index) │   signature    │   description   │
├─────────┼────────────────┼─────────────────┤
│    0    │ 'dummyCommand' │ 'Dummy command' │

```

Suggestion and PRs are welcomed!
