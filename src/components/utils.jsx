export function sleep(ms) {
  try {
    return new Promise((resolve) => setTimeout(resolve, ms));
  } catch (e) {
    console.log(e);
  }
}
