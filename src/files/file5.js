export const file5 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      alert("file 5 finished");
      res();
    }, 2000);
  });
};
export default file5;
