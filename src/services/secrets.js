import api from "../api/client";

export const saveSecret = async (formData) => {
  const response = await api.post("/api/secrets/", formData);
  return response.data;
};

export const getSecret = async (secretLink) => {
  const response = await api.get(`/api/secrets/${secretLink}`, secretLink);
  return response.data;
};
