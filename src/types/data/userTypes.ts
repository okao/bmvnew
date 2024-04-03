type UserType = {
  id?: number;
  name: string;
  description: string;
};

const UserTypeData = [
  {
    name: 'ADMIN',
    description: 'Admin User',
  },
  {
    name: 'USER',
    description: 'Regular User',
  },
  {
    name: 'GUEST',
    description: 'Guest User',
  },
  {
    name: 'PUBLISHER',
    description: 'Publisher User',
  },
  {
    name: 'EDITOR',
    description: 'Editor User',
  },
  {
    name: 'MODERATOR',
    description: 'Moderator User',
  },
  {
    name: 'CONTRIBUTOR',
    description: 'Contributor User',
  },
  {
    name: 'SUBSCRIBER',
    description: 'Subscriber User',
  },
] as UserType[];

export default UserType;
export { UserTypeData };
