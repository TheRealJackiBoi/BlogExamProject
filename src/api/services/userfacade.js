import axios from "axios";
import { BASE_URL } from "./config";
import { getToken } from "./auth/auth";


export const getTopUsersnamesForNameSearch = async (searchTerm) => {
  const token = getToken();
  try {
    // TODO: temporary url
    const response = await axios.get(`${BASE_URL}/users/search/${searchTerm}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const usersnames = await response.data;
      return usersnames;
    } else {
      console.error("Failed to fetch users");
      return null;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
} 