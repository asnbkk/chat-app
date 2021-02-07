import styled from 'styled-components';

export const MessageItemStyle = styled.div`
  display: grid;
  justify-content: start;
  margin-bottom: 10px;

  ${({ leftMessage }) =>
    leftMessage &&
    `
        justify-content: flex-end;
    `}
`;

export const MessageBox = styled.div`
  height: 40px;
  display: grid;
  align-items: center;
  padding: 0 1.5rem;
  background: #f0f0f0;

  ${({ leftMessage }) =>
    leftMessage &&
    `
        background: #0747ad;
        color: white;
    `}
`;

export const MessageSender = styled.div`
	color: gray;
`
