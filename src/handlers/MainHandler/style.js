import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  p {
    margin: 0;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
  button {
    margin: 20px;
    cursor: pointer;
    padding: 15px 30px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 3px;
    transform: scale(0.9);
    transition: 0.3s;
    font-weight: bold;
    :hover {
      transform: scale(1);
    }
  }
`;
