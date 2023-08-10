import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

import { UserInfo, UserInfoProps } from '@/components/user-info';

export const UpcomingInterviews = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Interviews</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-3 gap-x-10 '>
        {interviewUsersInfo.map((user) => (
          <UserInfo {...user} key={user.id} />
        ))}
      </CardContent>
    </Card>
  );
};

const interviewUsersInfo: UserInfoProps[] = [
  {
    id: 1,
    firstName: 'Marne',
    lastName: 'Crichley',
    avatar: 'https://robohash.org/inillumaut.png?size=200x200&set=set1',
    text: 'Software engineer',
    variant: 'purple',
    badgeText: '10:45 - 11:45',
  },
  {
    id: 2,
    firstName: 'Elsworth',
    lastName: 'Flagg',
    avatar: 'https://robohash.org/eumtotamexcepturi.png?size=200x200&set=set1',
    text: 'Mobile app developer',
    variant: 'cyan',
    badgeText: '11:30 - 12:30',
  },
  {
    id: 3,
    firstName: 'Caritta',
    lastName: 'Williment',
    avatar: 'https://robohash.org/sitquieius.png?size=200x200&set=set1',
    text: 'Software engineer',
    variant: 'cyan',
    badgeText: '10:30 - 11:30',
  },
  {
    id: 4,
    firstName: 'Matthieu',
    lastName: 'Whetnell',
    avatar: 'https://robohash.org/cumsintipsa.png?size=200x200&set=set1',
    text: 'Full-stack developer',
    variant: 'purple',
    badgeText: '10:45 - 11:45',
  },
  {
    id: 5,
    firstName: 'Larine',
    lastName: 'Radnage',
    avatar: 'https://robohash.org/ainciduntbeatae.png?size=200x200&set=set1',
    text: 'Product manager',
    variant: 'orange',
    badgeText: '11:30 - 12:30',
  },

  {
    id: 6,
    firstName: 'Caprice',
    lastName: 'Romans',
    avatar:
      'https://robohash.org/cumquereprehenderitperferendis.png?size=200x200&set=set1',
    text: 'UI/UX designer',
    variant: 'orange',
    badgeText: '11:45 - 12:45',
  },
  {
    id: 7,
    firstName: 'Rabi',
    lastName: 'Janew',
    avatar: 'https://robohash.org/dictamagnivel.png?size=200x200&set=set1',
    text: 'Python developer',
    variant: 'blue',
    badgeText: '10:15 - 11:15',
  },
  {
    id: 8,
    firstName: 'Fifi',
    lastName: 'McDonogh',
    avatar: 'https://robohash.org/nonautrerum.png?size=200x200&set=set1',
    text: 'Graphic designer',
    variant: 'blue',
    badgeText: '10:45 - 11:45',
  },
  {
    id: 9,
    firstName: 'Georas',
    lastName: 'Domeny',
    avatar:
      'https://robohash.org/consequaturcommodinihil.png?size=200x200&set=set1',
    text: 'UI/UX designer',
    variant: 'purple',
    badgeText: '10:45 - 11:45',
  },
  {
    id: 10,
    firstName: 'Rene',
    lastName: 'Du Barry',
    avatar: 'https://robohash.org/solutaoditrerum.png?size=200x200&set=set1',
    text: 'Full-stack developer',
    variant: 'green',
    badgeText: '10:45 - 11:45',
  },
];
