import fastJsonStringify from 'fast-json-stringify';
import { User } from './model/user';
import { userSchema } from './schema/userSchema';

export class SerializeUser {
  stringifyUser: (input: User) => any;

  constructor() {
    this.stringifyUser = fastJsonStringify(userSchema);
  }

  async start(input: User): Promise<string> {
    return this.stringifyUser(input);
  }
}
