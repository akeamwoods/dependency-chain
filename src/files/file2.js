export const file2 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      alert("file 2 finished");
      res();
    }, 1000);
  });
};
export default file2;
