import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: none;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #94c6f1;
  border-right: 1px solid #94c6f1;
  border-left: 1px solid #94c6f1;
  padding: 0 12px;
  background-color: white;
  &.open {
    display: flex;
  }
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
