import bcrypt from "bcryptjs";

// const users = [
//   {
//     name: "Admin User",
//     email: "admin@example.com",
//     password: bcrypt.hashSync("123456", 10),
//     isAdmin: true,
//   },
//   {
//     name: "John Doe",
//     email: "john@example.com",
//     password: bcrypt.hashSync("123456", 10),
//   },
//   {
//     name: "Jane Doe",
//     email: "jane@example.com",
//     password: bcrypt.hashSync("123456", 10),
//   },
// ];

const users = [
  {
    name: "Admin User",
    email: "kittyAdmin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Catherine Tian",
    email: "cathy22tian@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Zongxi Li",
    email: "zongxi2014@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
