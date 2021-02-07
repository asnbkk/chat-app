import React from 'react';
import { ChatInputWrapper, Input, Button } from './ChatInputStyle';

const ChatInput = ({ message, setMessage, sendMessage }) => {
  return (
    <ChatInputWrapper>
      <Input
        placeholder='Type something...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage(e)}
      />
      <Button onClick={(e) => sendMessage(e)}>Send</Button>
    </ChatInputWrapper>
  );
};

export default ChatInput;
