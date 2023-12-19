import apiInstance from "../services";
import ApiConstants from "../services/apiConstants";

export const getCounsellorData = async () => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.COUNSELLOR));
  } catch (error) {
    return Promise.reject(error);
  }
};
