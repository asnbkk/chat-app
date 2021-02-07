import React from 'react';
import { HeaderStyle } from './HeaderStyle';

const Header = ({roomName}) => {
  return <HeaderStyle>{roomName}</HeaderStyle>;
};

export default Header;
