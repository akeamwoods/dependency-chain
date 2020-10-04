export const file3 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      alert("file 3 finished");
      res();
    }, 3000);
  });
};
export default file3;
