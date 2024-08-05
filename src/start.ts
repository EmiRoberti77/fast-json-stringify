import { User } from './fast_json_parser/model/user';
import { SerializeUser } from './fast_json_parser/SerializeUser';

const user: User = {
  name: 'Emi',
  age: 48,
  city: 'Rome',
};

async function run() {
  const userSerializer = new SerializeUser();
  return await userSerializer.start(user);
}

run()
  .then((success) => console.log(success))
  .catch((err) => console.log(err));
