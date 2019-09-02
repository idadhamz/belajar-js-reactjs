
const users = []

const addUser = ({id, username, group}) => {
  username = username.trim().toLowerCase()
  group = group.trim().toLowerCase()

  const user = { id, username, group }
  users.push(user)
  return { user }
}

const getUser = (id) => {
  return users.find((user) => user.id == id)
}

const getUserInGroup = (group) => {
  group = group.trim().toLowerCase()
  return users.filter((user) => user.group === group)
}

module.exports = {
  addUser,
  getUser,
  getUserInGroup
}