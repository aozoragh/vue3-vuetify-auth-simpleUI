import axios from "axios";

export const setUserInfo = async (newUser) => {
  const userList = await axios.post(
    "https://api.lifeprocessprogram.com/api/v1/client/contact",
    newUser
  );

  return userList.data;
};

export const setPsw = async (id, psw) => {
  console.log("id: ", id);
  console.log("psw: ", psw);
  const response = await axios.put(
    `https://api.lifeprocessprogram.com/api/v1/client/${id}/password`,
    { password: psw }
  );
  return response.data;
};
