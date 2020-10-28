import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f1f1f1;
  grid-area: header;
`;

export const Name = styled.div`
  margin: 5px 0;
`;

export const Title = styled.div`
  font-size: 35px;
`;

export const Content = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 300;
    font-size: 25px;
    text-align: left;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    p {
      font-size: 12px;
    }
  }
`;
