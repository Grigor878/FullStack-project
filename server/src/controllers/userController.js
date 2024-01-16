function getAllUsers(req, res) {
    const users = ["userOne", "userTwo", "userThree"];
    res.json({ users });
}

function addUser(req, res) {
    const newUser = req.body;

    res.json({ message: 'User added successfully', user: newUser });
}


function editUser(req, res) {
    const userId = req.params.id;
    const updatedUserData = req.body;

    res.json({ message: 'User updated successfully', user: updatedUserData });
}

function deleteUser(req, res) {
    const userId = req.params.id;

    res.json({ message: 'User deleted successfully', userId });
}

module.exports = { getAllUsers, addUser, editUser, deleteUser };