const getUser = (req, res) => {
  console.log('getUser controller');
  res.send('get user controller is called');
};

const createUser = (req, res) => {
  console.log('create user controller');

  res.send('create user controller is called');
};

const getUserById = (req, res) => {};

const deleteUser = (req, res) => {};

const updateUser = (req, res) => {};

export { getUser, createUser, getUserById, deleteUser, updateUser };
