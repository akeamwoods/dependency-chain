export const file4 = () => {
  return new Promise((res) => {
    setTimeout(() => {
      alert("file 4 finished");
      res();
    }, 9000);
  });
};
export default file4;
