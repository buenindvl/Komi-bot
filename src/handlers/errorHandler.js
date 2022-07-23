module.exports = () => {
  process.on("rejectionHandled", (err) => {
    console.log(err);
    return;
  });
  process.on("uncaughtException", (err) => {
    console.log(err);
    return;
  });
  process.on("unhandledRejection", (err) => {
    console.log(err);
    return;
  });
};