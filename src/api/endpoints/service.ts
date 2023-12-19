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

export const verifyOtp = async (data: string) => {
  try {
    return Promise.resolve(
      await apiInstance.post(ApiConstants.OTP_VERIFY, data)
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const clientCreate = async (data: string) => {
  try {
    return Promise.resolve(await apiInstance.post(ApiConstants.CLIENT, data));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createBookingApi = async (data: any) => {
  try {
    return Promise.resolve(await apiInstance.post(ApiConstants.BOOKING, data));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPaymentAPi = async (data: any) => {
  try {
    return Promise.resolve(await apiInstance.post(ApiConstants.PAYMENT, data));
  } catch (error) {
    return Promise.reject(error);
  }
};

// home page api endpoints

export const getTestimonials = async () => {
  try {
    return Promise.resolve(await apiInstance.get(ApiConstants.TESTMONIAL));
  } catch (error) {
    return Promise.reject(error);
  }
};
