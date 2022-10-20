const user = require("../services/user");

exports.getUser = async (req, res) => {
  try {
    const response = await user.findUserByID(req.query.id);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    await user.createUser(req.body);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User created successfully." }));
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    await user.updateUser(req.body);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User updated successfully." }));
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await user.deleteUser(req.body);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User deleted successfully." }));
  } catch (err) {
    console.log(err);
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end(err);
  }
};
