import styled from "styled-components";

export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  padding: 20px 40px;
  h3 {
    margin: 0 0 20px 0;
  }
`;

export const FileImage = styled.img`
  margin-bottom: 20px;
`;

export const FileInfoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 22px;
    width: 22px;
    margin-right: 10px;
  }
  :not(:last-child) {
    margin-bottom: 5px;
  }
  img {
    height: 22px;
    width: 22px;
    color: #000;
    margin-right: 10px;
  }
`;
