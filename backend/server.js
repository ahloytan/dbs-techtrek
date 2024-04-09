//https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
//Separate your app and server. The reason behind this is that it won’t listen to the port after testing.
const PORT = process.env.PORT || 5000;
const app = require("./app");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});