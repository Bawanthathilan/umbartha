import apiInstance from "../services";
import ApiConstants from "../services/apiConstants";

export const getTestData = async (id: any) => {
  try {
    return Promise.resolve(
      await apiInstance.get(`${ApiConstants.USERS}/${id}`)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
