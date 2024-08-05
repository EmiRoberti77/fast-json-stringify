import { Schema } from 'fast-json-stringify';

export const userSchema: Schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' },
    city: { type: 'string' },
  },
  required: ['name', 'age', 'city'],
};
