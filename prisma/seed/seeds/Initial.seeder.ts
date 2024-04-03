import bcrypt from 'bcrypt';
import range from 'lodash/range';
import { faker } from '@faker-js/faker';
import Seeder from '../Seeder';

class InitialSeeder extends Seeder {
  constructor(count: number) {
    super(count);
    this.createData();
  }

  protected createData(): void {
    this._data = range(this.count).map(() => {
      return {
        name: faker.person.firstName(),
      };
    });

    console.log(
      '=========================================================='
    );
    console.log(this._data);
    console.log('Initial data seeded successfully! 🌱🚀');
  }
}

export default InitialSeeder;
