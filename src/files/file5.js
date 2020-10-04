export const file5 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("file 5 finished");
      res();
    }, 2000);
  });
};
export default file5;
