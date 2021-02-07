import React from 'react';
import { MessagesStyle } from './MessagesStyle';
import { MessageItem } from '../../components';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages, name }) => {
  const _messages = messages.map((message, index) => {
    return <MessageItem key={index} message={message} name={name} />;
  });

  return <ScrollToBottom>{_messages}</ScrollToBottom>;
};

export default Messages;
