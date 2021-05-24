import axios from "axios";

const getStaffs = () => axios.get("/staffs");

export const staffAPI = {
  getStaffs,
};
