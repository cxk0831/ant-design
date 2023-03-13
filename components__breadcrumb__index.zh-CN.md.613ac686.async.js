"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6914],{48324:function(s,u,e){e.r(u);var p=e(502143),m=e(968521),c=e(659378),Z=e(28840),a=e(374912),i=e(828089),v=e(902068),h=e(574399),b=e(863942),x=e(316073),E=e(24628),A=e(719260),P=e(956140),f=e(127179),r=e(905388),D=e(147341),j=e(606965),U=e(249706),O=e(795127),L=e(116846),M=e(73024),l=e(606641),o=e(667294),t=e(370917);function d(){var _=(0,l.eL)(),n=_.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(o.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value),(0,t.tZ)("li",null,n[3].value)),(0,t.tZ)(a.Z,{lang:"jsx"},n[4].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(r.Z,{items:[{demo:{id:"components-breadcrumb-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/breadcrumb/demo/basic.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-withicon"},previewerProps:{title:"\u5E26\u6709\u56FE\u6807\u7684",filename:"components/breadcrumb/demo/withIcon.tsx",jsx:`import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-react-router"},previewerProps:{iframe:"200",title:"react-router V6",filename:"components/breadcrumb/demo/react-router.tsx",jsx:`import { Alert, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \`/\${pathSnippets.slice(0, index + 1).join('/')}\`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Alert
        style={{
          margin: '16px 0',
        }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);
export default App;
`,description:"<p>\u4E0E <code>react-router@6+</code> \u7ED3\u5408\u4F7F\u7528\uFF0C\u751F\u6210\u548C\u8DEF\u7531\u7ED1\u5B9A\u7684\u9762\u5305\u5C51\u3002</p>",style:`.demo {
  margin: 16px;
}
.demo-nav {
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  background: #f8f8f8;
}
.demo-nav a {
  padding: 0 8px;
  line-height: 30px;
}
.app-list {
  margin-top: 16px;
}`}},{demo:{id:"components-breadcrumb-demo-separator"},previewerProps:{title:"\u5206\u9694\u7B26",filename:"components/breadcrumb/demo/separator.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:'<p>\u4F7F\u7528 <code>separator=">"</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002</p>'}},{demo:{id:"components-breadcrumb-demo-overlay"},previewerProps:{title:"\u5E26\u4E0B\u62C9\u83DC\u5355\u7684\u9762\u5305\u5C51",filename:"components/breadcrumb/demo/overlay.tsx",jsx:`import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title: 'Button',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-separator-component"},previewerProps:{title:"\u5206\u9694\u7B26",filename:"components/breadcrumb/demo/separator-component.tsx",jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u5355\u72EC\u7684\u5206\u9694\u7B26\u3002</p>"}},{demo:{id:"components-breadcrumb-demo-debug-routes"},previewerProps:{title:"Debug Routes",filename:"components/breadcrumb/demo/debug-routes.tsx",jsx:`import { Breadcrumb } from 'antd';
export default () => (
  <Breadcrumb
    routes={[
      {
        path: '/home',
        breadcrumbName: 'Home',
      },
      {
        path: '/user',
        breadcrumbName: 'User',
        children: [
          {
            path: '/user1',
            breadcrumbName: 'User1',
          },
          {
            path: '/user2',
            breadcrumbName: 'User2',
          },
        ],
      },
    ]}
  />
);
`,description:"<p>\u539F <code>routes</code> \u8C03\u8BD5\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"breadcrumb"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumb"},(0,t.tZ)("span",{className:"icon icon-link"})),"Breadcrumb"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"#ItemType"},n[20].value)),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[26].value)),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"itemtype"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype"},(0,t.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[27].value,(0,t.tZ)(l.rU,{to:"#RouteItemType"},n[28].value),n[29].value,(0,t.tZ)(l.rU,{to:"#SeparatorType"},n[30].value))),(0,t.tZ)("h3",{id:"routeitemtype"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#routeitemtype"},(0,t.tZ)("span",{className:"icon icon-link"})),"RouteItemType"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[31].value),(0,t.tZ)("th",null,n[32].value),(0,t.tZ)("th",null,n[33].value),(0,t.tZ)("th",null,n[34].value),(0,t.tZ)("th",null,n[35].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"/components/dropdown-cn"},n[42].value)),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"/components/menu-cn/#api"},n[50].value)),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[53].value),(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value)))),(0,t.tZ)("h3",{id:"separatortype"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#separatortype"},(0,t.tZ)("span",{className:"icon icon-link"})),"SeparatorType"),(0,t.tZ)(a.Z,{lang:"ts"},n[62].value),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[63].value),(0,t.tZ)("th",null,n[64].value),(0,t.tZ)("th",null,n[65].value),(0,t.tZ)("th",null,n[66].value),(0,t.tZ)("th",null,n[67].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[70].value)),(0,t.tZ)("td",null),(0,t.tZ)("td",null,n[71].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[75].value)),(0,t.tZ)("td",null,n[76].value)))),(0,t.tZ)("h3",{id:"\u548C-browserhistory-\u914D\u5408"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u548C-browserhistory-\u914D\u5408"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u548C browserHistory \u914D\u5408"),(0,t.tZ)("p",null,n[77].value,(0,t.tZ)("code",null,n[78].value),n[79].value,(0,t.tZ)("code",null,n[80].value),n[81].value),(0,t.tZ)(a.Z,{lang:"jsx"},n[82].value))))}u.default=d}}]);
