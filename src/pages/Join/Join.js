import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  Input,
  InputWrapper,
  Label,
  Button,
} from './JoinStyles';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  
  return (
    <Container>
      <Card>
        <h2>Join</h2>
        <InputWrapper>
          <Label>Your name</Label>
          <Input onChange={event => setName(event.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <Label>Room #</Label>
          <Input onChange={event => setRoom(event.target.value)} />
        </InputWrapper>
        <Link onClick={event => (!name || !room) && event.preventDefault()} to={`/chat?name=${name}&room=${room}`}>
          <Button>Go to chat</Button>
        </Link>
      </Card>
    </Container>
  );
};

export default Join;
