import React, { useState } from "react";
import { Logo } from "./../../components/logo";
import { Wrapper } from "./style";

export const MainHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [fileNumber, setFileNumber] = useState(1);
  const fileCount = 5;

  const loadAndExecuteJS = async (currentFile) => {
    if (currentFile <= fileCount) {
      setLoading(true);
      await (await import(`./../../files/file${currentFile}.js`)).default();
      setLoading(false);
      setFileNumber(currentFile + 1);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <p>
        Clicking the button below will sequentially load/execute a series of
        javascript files.
      </p>
      <button
        onClick={() => loadAndExecuteJS(fileNumber)}
        disabled={fileNumber > fileCount}
      >
        Load
      </button>
      {isLoading && (
        <img src={process.env.PUBLIC_URL + "/loading.svg"} alt="logo" />
      )}
    </Wrapper>
  );
};
