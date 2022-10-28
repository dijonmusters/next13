export default (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(async () => {
      resolve(true);
    }, timeout);
  });
