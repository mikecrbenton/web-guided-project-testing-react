import axios from "axios";

// helper method - reusability
export const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
       // we could add proper error handling
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
