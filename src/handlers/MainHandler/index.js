import React, { useState } from "react";
import { Logo } from "./../../components/logo";
import { Wrapper } from "./style";

export const MainHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const [fileNumber, setFileNumber] = useState(1);
  const files = ["./../../files/file1.js", "./../../files/file2.js"];

  async function main() {
    if (fileNumber <= files.length) {
      setLoading(true);
      await (await import(`./../../files/file${fileNumber}.js`)).default();
      setLoading(false);
      setFileNumber(fileNumber + 1);
    }
  }

  return (
    <Wrapper>
      <Logo />
      <p>
        Clicking the button below will sequentially load/execute a series of
        javascript files.
      </p>
      <button onClick={() => main()} disabled={fileNumber > files.length}>
        Load
      </button>
      {isLoading && (
        <img src={process.env.PUBLIC_URL + "/loading.svg"} alt="logo" />
      )}
    </Wrapper>
  );
};
