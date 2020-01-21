import styled from 'styled-components';

const Meta = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  & > * {
    width: 25%;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Meta;
