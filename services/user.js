const Users = [
  {
    id: 1,
    email: "asd1@google.com",
    firstName: "Hello1",
    lastName: "itsMe",
    created: "2022-10-20T19:35:33.223Z",
  },
  {
    id: 2,
    email: "asd11@google.com",
    firstName: "Hello11",
    lastName: "itsMe",
    created: "2022-10-20T19:35:39.779Z",
  },
];

exports.findUserByID = async (id) => {
  const searchID = parseInt(id, 10);
  if (searchID && !Number.isNaN(searchID)) {
    const response = await Users.find((user) => user.id === searchID);

    if (!response) throw `Could not find user.`;

    return response;
  }

  return Users;
};

exports.createUser = ({ email, firstName, lastName }) => {
  if (!email || !firstName || !lastName) {
    throw `Missing information.`;
  }

  const exists = Users.find(
    (user) =>
      user.email === email &&
      user.firstName === firstName &&
      user.lastName === firstName
  );

  if (exists) {
    throw `User already exists.`;
  }

  Users.push({
    id: Users.length + 1,
    email: email,
    firstName: firstName,
    lastName: lastName,
    created: new Date().toGMTString(),
  });

  return true;
};

exports.updateUser = (user) => {
  if (!user.id && !user.email && !user.firstName && !user.lastName) {
    throw `Missing information.`;
  }

  const exists = Users.find((element) =>
    Object.keys(user).some((key) => user[key] === element[key])
  );

  if (!exists) {
    throw `User does not exist.`;
  }

  Object.keys(user).forEach((key) => (exists[key] = user[key]));

  return true;
};

exports.deleteUser = (user) => {
  if (!user.id && !user.email && !user.firstName && !user.lastName) {
    throw `Missing information.`;
  }

  const exists = Users.findIndex((element) =>
    Object.keys(user).every((key) => user[key] === element[key])
  );

  if (exists === -1) {
    throw `User does not exist.`;
  }

  Users.splice(exists, 1);
  return true;
};
