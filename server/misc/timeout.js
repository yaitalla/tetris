const timeout = (ms = 3000) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

module.exports = timeout;