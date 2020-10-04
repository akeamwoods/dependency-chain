import React, { useState } from "react";
import { Logo } from "./../../components/logo";
import { FaFileCode, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Wrapper, FileInfoContainer } from "./style";

export const MainHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [fileNumber, setFileNumber] = useState(1);
  const files = ["File 1", "File 2", "File 3", "File 4", "File 5"];

  const loadAndExecuteJS = async (currentFile) => {
    if (currentFile <= files.length) {
      setLoading(true);
      await (await import(`./../../files/file${currentFile}.js`)).default();
      setLoading(false);
      setFileNumber(currentFile + 1);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <h4>
        Clicking the button below will sequentially load/execute javascript
        files.
      </h4>
      {files.map((file, index) => (
        <FileInfoContainer>
          {index + 1 < fileNumber ? (
            <FaCheckCircle color="#8bc34a" />
          ) : (
            <FaTimesCircle />
          )}
          <p style={{ color: index + 1 < fileNumber ? "#8bc34a" : "#000" }}>
            {file}
          </p>
        </FileInfoContainer>
      ))}
      <button
        onClick={() => loadAndExecuteJS(fileNumber)}
        disabled={fileNumber > files.length}
      >
        <FaFileCode size="24px" />
        {`Load File ${fileNumber <= 5 ? fileNumber : 5}`}
      </button>

      {isLoading && (
        <img src={process.env.PUBLIC_URL + "/loading.svg"} alt="logo" />
      )}
    </Wrapper>
  );
};
