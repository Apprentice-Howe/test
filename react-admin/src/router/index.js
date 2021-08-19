import Page1 from "../page/page1";
import Page2 from "../page/page2";
import Page3 from "../page/page3";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: Page1,
    icon: <UserOutlined/>
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
    icon: <VideoCameraOutlined/>
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
    icon: <UploadOutlined/>
  },
]

export default routes
