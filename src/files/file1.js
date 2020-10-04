export const file1 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("file1 finished");
      res();
    }, 4000);
  });
};
export default file1;
