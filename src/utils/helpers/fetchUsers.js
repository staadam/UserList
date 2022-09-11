import axios from 'axios';

const usersUrl = 'https://randomuser.me/api/?results=5&inc=id,name,email,picture,location,registered';

export const fetchUsers = async (setUsers, setError) => {
  try {
    const {
      data: { results },
    } = await axios.get(usersUrl);

    setUsers(results);
  } catch (error) {
    setError(error.message);
  }
};
