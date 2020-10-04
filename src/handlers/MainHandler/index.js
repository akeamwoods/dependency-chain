import React, { useState } from "react";
import { FaFileCode } from "react-icons/fa";
import { FileDisplay } from "./../../components/FileDisplay";
import { Wrapper, LogoWrapper } from "./style";

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
      <LogoWrapper>
        <img
          src={process.env.PUBLIC_URL + "/chain.svg"}
          alt="logo"
          height="30px"
        />
        <h1>Dependency Chain</h1>
      </LogoWrapper>
      <h4>
        Clicking the button below will sequentially load/execute javascript
        files.
      </h4>
      <span>
        <FileDisplay
          files={files}
          fileNumber={fileNumber}
          isLoading={isLoading}
        />
        <button
          onClick={() => loadAndExecuteJS(fileNumber)}
          disabled={fileNumber > files.length || isLoading}
        >
          <FaFileCode size="24px" />
          {fileNumber <= 5 ? `Load File ${fileNumber}` : "All files loaded"}
        </button>
      </span>
    </Wrapper>
  );
};
