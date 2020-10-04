import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FilesContainer, FileInfoWrapper, FileImage } from "./style";

export const FileDisplay = ({ files, fileNumber, isLoading }) => {
  return (
    <FilesContainer>
      <h3>Loaded/Executed Files</h3>
      <FileImage
        src={process.env.PUBLIC_URL + "/folder.svg"}
        alt="logo"
        height="72px"
      />

      <span>
        {files.map((file, index) => (
          <FileInfoWrapper>
            {index + 1 < fileNumber ? (
              <FaCheckCircle color="#8bc34a" />
            ) : fileNumber === index + 1 && isLoading ? (
              <img src={process.env.PUBLIC_URL + "/loading.svg"} alt="logo" />
            ) : (
              <FaTimesCircle />
            )}
            <p style={{ color: index + 1 < fileNumber ? "#8bc34a" : "#000" }}>
              {file}
            </p>
          </FileInfoWrapper>
        ))}
      </span>
    </FilesContainer>
  );
};
