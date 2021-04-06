const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   \n'];

let rotation = 0;
for (const elem of spinner) {
  setTimeout(() => {
    process.stdout.write(elem);
  }, 100 * rotation);
  rotation++;
}