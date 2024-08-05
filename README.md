**fast-json-stringify**

fast-json-stringify is an external library designed for high-performance JSON serialization in JavaScript. It is especially useful when performance is a critical factor.
Features
    <p>
    <b>High Performance</b>: Optimized for speed and can outperform JSON.stringify in many scenarios, especially when dealing with large objects or requiring frequent serialization.
    </p>
    <p>
    <b>Schema-Based Serialization</b>: Uses JSON schema definitions to precompile and optimize the serialization process. This means that the first time a schema is compiled, it creates a custom serializer for that specific schema, which can be reused to serialize multiple objects quickly.
    </p>
    <p>
    <b>Custom Serializers</b>: Allows for custom serialization logic, which can be useful for special data types or complex objects.
    </p>
    <p>
    <b>Flexibility</b>: Supports additional options and customization through schema definitions.
    </p>


sample code - 
```typescript
// schema/userSchema.ts
export const userSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' },
    city: { type: 'string' },
  },
  required: ['name', 'age', 'city'],
};

// model/user.ts
export interface User {
  name: string;
  age: number;
  city: string;
}

// serializeUser.ts
import fastJsonStringify from 'fast-json-stringify';
import { User } from './model/user';
import { userSchema } from './schema/userSchema';

export class SerializeUser {
  stringifyUser: (input: User) => string;

  constructor() {
    this.stringifyUser = fastJsonStringify(userSchema);
  }

  async start(user: User): Promise<string> {
    return this.stringifyUser(user);
  }
}

// main.ts
async function run() {
  const serializer = new SerializeUser();
  const user: User = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  const jsonString = await serializer.start(user);
  console.log(jsonString); // Output: {"name":"Alice","age":30,"city":"New York"}
}

run();
```
