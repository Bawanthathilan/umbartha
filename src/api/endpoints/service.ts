import apiInstance from "../services";
import ApiConstants from "../services/apiConstants";

export const getCounsellorData = async () => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.COUNSELLOR));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMeetingDataByCounsellorId = async (id: string) => {
  try {
    return Promise.resolve(
      await apiInstance.get(`${ApiConstants.MEETING}/${id}`)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendOtp = async (phoneNumber: string) => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.OTP, phoneNumber)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};
