import axios from "axios";

export const getArweaveData = async (url) => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
