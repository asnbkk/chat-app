import React, { useState, useEffect } from 'react';
import { Container, MessagesContainer } from './ChatStyles';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Header, ChatInput, Messages } from '../../components';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://chat-assan.herokuapp.com/';

  let connectionOptions = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
  };

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, connectionOptions);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <Container>
      <Header roomName={room} />
      <MessagesContainer>
        <Messages messages={messages} name={name} />
      </MessagesContainer>
      <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </Container>
  );
};

export default Chat;
