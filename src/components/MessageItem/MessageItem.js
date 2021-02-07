import React from 'react';
import { MessageItemStyle, MessageBox, MessageSender } from './MessageItemStyle';

const MessageItem = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) isSentByCurrentUser = true;

  return (
    <MessageItemStyle leftMessage={isSentByCurrentUser}>
      <MessageBox leftMessage={isSentByCurrentUser}>
				{text}
      </MessageBox>
			<MessageSender>{user !== name && user}</MessageSender>
    </MessageItemStyle>
  );
};

export default MessageItem;
