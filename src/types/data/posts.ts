import { Tag } from './tags';
import { User } from './user';
import Category from './categories';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Post = {
  index?: number;
  id?: string;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  published: boolean;

  authorId: string;
  author?: User;

  publisherId: string;
  publisher?: User;

  tags?: Tag[];
  categories?: Category[];
};

const PostData: Post[] = [];

//get the user data
const asyncUserData = async () => {
  const users = await prisma.user.findMany();

  const userIds = users.map((user) => user.id);

  return userIds;
};

const PostDataToAdd = async () => {
  const users = await asyncUserData();

  for (let i = 0; i < 1000; i++) {
    const title = faker.lorem.sentence();
    PostData.push({
      title: title,
      slug: faker.helpers.slugify(title) + '_' + i,
      content: faker.lorem.paragraphs(15),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      published: faker.helpers.arrayElement([true, false]),
      authorId: faker.helpers.arrayElement(users),
      publisherId: faker.helpers.arrayElement(users),
    });
  }

  return PostData;
};

export { PostDataToAdd };
