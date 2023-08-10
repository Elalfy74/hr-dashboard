import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { UserInfo, UserInfoProps } from '@/components/user-info';

export const RecentApplications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Job Applications</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-3'>
        {usersInfo.map((user) => (
          <UserInfo {...user} key={user.id} />
        ))}
      </CardContent>
    </Card>
  );
};

const usersInfo: UserInfoProps[] = [
  {
    id: 1,
    firstName: 'Ericka',
    lastName: 'Huws',
    avatar: 'https://robohash.org/doloremquoporro.png?size=200x200&set=set1',
    badgeText: 'Full-stack developer',
    variant: 'cyan',
    text: 'Serbia',
  },
  {
    id: 2,
    firstName: 'Elbertina',
    lastName: 'Natwick',
    avatar:
      'https://robohash.org/architectoeosdolores.png?size=200x200&set=set1',
    badgeText: 'Python developer',
    variant: 'orange',
    text: 'Belarus',
  },
  {
    id: 3,
    firstName: 'Anabel',
    lastName: 'Hudspeth',
    avatar:
      'https://robohash.org/molestiaequiaratione.png?size=200x200&set=set1',
    badgeText: 'UI/UX designer',
    variant: 'blue',
    text: 'Poland',
  },
  {
    id: 4,
    firstName: 'Rodolphe',
    lastName: 'Harman',
    avatar:
      'https://robohash.org/ipsarepellendusiure.png?size=200x200&set=set1',
    badgeText: 'Software engineer',
    variant: 'green',
    text: 'Russia',
  },
  {
    id: 5,
    firstName: 'Opal',
    lastName: 'Symcock',
    avatar: 'https://robohash.org/autdebitisnemo.png?size=200x200&set=set1',
    badgeText: 'UI/UX designer',
    variant: 'purple',
    text: 'Bolivia',
  },
];
