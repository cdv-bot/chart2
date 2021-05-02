import { lazy } from 'react';
const Main = lazy(() => import('./../page/MainPage'));
const Notfound = lazy(() => import('./../page/NotFound'));

const Page = [
  {
    path: '/trang-chu',
    exact: true,
    main: Main,
  },
  {
    main: Notfound,
  },
];

export default Page;
