import { UserTypeData } from './userTypes';
import { UserType } from '@prisma/client';
import { faker } from '@faker-js/faker';

type User = {
  id?: string;
  email: string;
  password: string;
  name: string;
  userTypeId: number;
  createdAt: Date;
  updatedAt?: Date;
  userType?: UserType;
};

const password = faker.internet.password();
console.log(password);

const UserData: User[] = [];

for (let i = 0; i < 10; i++) {
  UserData.push({
    email: faker.internet.email(),
    password: password,
    name: faker.internet.userName(),
    userTypeId: faker.helpers.arrayElement([1, 2, 3, 4]),
    createdAt: faker.date.past(),
  });
}

export type { User };
export { UserData };

// {
//     email: faker.internet.email(),
//     password: password,
//     name: faker.internet.userName(),
//     userType: faker.helpers.arrayElement(UserTypeData),
//     createdAt: faker.date.past(),
//   },
