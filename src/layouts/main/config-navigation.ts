import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
    ],
  },
];

export const navConfig = [
  { title: 'Нүүр хуудас', path: '/' },
  { title: 'Бүтээгдэхүүн', path: paths.landing.product },
  { title: 'Төсөл', path: paths.landing.project },
  { title: 'Бидний тухай', path: paths.landing.aboutus },
  { title: 'Блог', path: paths.landing.blog },
  { title: 'Холбоо барих', path: paths.landing.contact },
];
