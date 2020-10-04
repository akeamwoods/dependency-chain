import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  h4 {
    margin: 20px 0;
    color: #fff;
    text-align: center;
  }
  p {
    margin: 0;
  }
  button {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px 10px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    font-weight: 600;
    svg {
      margin-right: 10px;
      opacity: 0.6;
      transition: 0.3s;
    }
    :hover {
      svg {
        opacity: 1;
      }
    }
    :disabled {
      svg {
        opacity: 0.3;
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  img {
    margin-right: 10px;
  }
  h1 {
    font-size: 1.7em;
    margin: 0;
  }
`;
