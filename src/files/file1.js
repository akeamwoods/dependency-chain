export const file1 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      alert("file1 finished");
      res();
    }, 4000);
  });
};
export default file1;
