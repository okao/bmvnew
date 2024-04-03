import { Locale } from '@prisma/client';
import { faker } from '@faker-js/faker';

type Tag = {
  id?: string;
  name: string;
  locale: Locale;
  slug: string;
};

const TagData: Tag[] = [
  {
    name: 'Tag 1',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-1',
  },
  {
    name: 'Tag 2',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-2',
  },
  {
    name: 'Tag 3',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-3',
  },
  {
    name: 'Tag 4',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-4',
  },
  {
    name: 'Tag 5',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-5',
  },
  {
    name: 'Tag 6',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-6',
  },
  {
    name: 'Tag 7',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-7',
  },
  {
    name: 'Tag 8',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-8',
  },
  {
    name: 'Tag 9',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-9',
  },
  {
    name: 'Tag 10',
    locale: faker.helpers.enumValue(Locale),
    slug: 'tag-10',
  },
];
export type { Tag };
export { TagData };
