import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import Button_0 from './Options/Button_0';
import Admission from './Options/Admission';
import Fee from './Options/Fee';
import Uniform from './Options/Uniform';
import Books from './Options/Books';
import StudyCert from './Options/Documents/StudyCert';
import Document from './Options/Documents/Document';
import Other from './Options/Other';
import Timing from './Options/Timing';

const config = {
  botName: "SwiftSense",
  initialMessages: [createChatBotMessage(`Hi there I'm SwiftSense, Choose an Option for Details.`, {
    widget: "button_0"
  })],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#a238c7',
    },
    chatButton: {
      backgroundColor: '#a238c7',
    },
  },
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />
  },
  widgets: [
    {
      widgetName: 'button_0',
      widgetFunc: (props) => <Button_0 {...props} />,
    },
    {
      widgetName: 'admission',
      widgetFunc: (props) => <Admission {...props} />,
    },
    {
      widgetName: 'fee',
      widgetFunc: (props) => <Fee {...props} />,
    },
    {
      widgetName: 'uniform',
      widgetFunc: (props) => <Uniform {...props} />,
    },
    {
      widgetName: 'books',
      widgetFunc: (props) => <Books {...props} />,
    },
    {
      widgetName: 'document',
      widgetFunc: (props) => <Document {...props} />,
    },
    {
      widgetName: 'studycert',
      widgetFunc: (props) => <StudyCert {...props} />,
    },
    {
      widgetName: 'timing',
      widgetFunc: (props) => <Timing {...props} />,
    },
    {
      widgetName: 'other',
      widgetFunc: (props) => <Other {...props} />,
    },
  ]
};

export default config;
