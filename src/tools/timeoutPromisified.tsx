export const timeoutPromisified = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});