"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(u,a,_){_.r(a);var r=_(502143),c=_(968521),m=_(659378),h=_(28840),e=_(374912),i=_(828089),p=_(902068),E=_(574399),Z=_(863942),v=_(316073),P=_(24628),x=_(719260),M=_(956140),D=_(127179),O=_(905388),j=_(147341),U=_(606965),f=_(249706),g=_(795127),C=_(116846),I=_(73024),s=_(606641),l=_(667294),n=_(370917);function o(){var d=(0,s.eL)(),t=d.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,t[2].value,(0,n.tZ)("code",null,t[3].value),t[4].value),(0,n.tZ)(e.Z,{lang:"tsx"},t[5].value),(0,n.tZ)("p",null,t[6].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,t[7].value,(0,n.tZ)("code",null,t[8].value),t[9].value),(0,n.tZ)(e.Z,{lang:"tsx"},t[10].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(e.Z,{lang:"tsx"},t[11].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(e.Z,{lang:"tsx"},t[12].value),(0,n.tZ)(e.Z,{lang:"tsx"},t[13].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#app"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(i.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[14].value),(0,n.tZ)("th",null,t[15].value),(0,n.tZ)("th",null,t[16].value),(0,n.tZ)("th",null,t[17].value),(0,n.tZ)("th",null,t[18].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,(0,n.tZ)(s.rU,{to:"/components/message/#messageconfig"},t[21].value)),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,(0,n.tZ)(s.rU,{to:"/components/notification/#notificationconfig"},t[26].value)),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value)))))))}a.default=o}}]);
