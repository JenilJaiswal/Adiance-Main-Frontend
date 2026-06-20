import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const NEWS_API = `${API_URL}/news`;

const withAuth = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const hasImageFile = (data) => data?.image instanceof File;

const buildFormData = (data) => {
  const formData = new FormData();
  if (data.image instanceof File) {
    formData.append("image", data.image);
    data = { ...data, image: undefined };
  }
  formData.append("formattedData", JSON.stringify(data));
  return formData;
};

export const getNews = async ({
  page = 1,
  limit = 12,
  year = "all",
  category = "all",
  search = "",
  status = "published",
} = {}) => {
  const params = { page, limit, year, category };
  if (status && status !== "") params.status = status;
  if (search) params.search = search;
  const { data } = await axios.get(NEWS_API, { params });
  return data;
};

export const getNewsByUrlWords = async (slug) => {
  const { data } = await axios.get(
    `${NEWS_API}/urlWords/${encodeURIComponent(slug)}`
  );
  return data;
};

export const getNewsById = async (id) => {
  const { data } = await axios.get(`${NEWS_API}/${id}`, {
    headers: { ...withAuth() },
  });
  return data;
};

export const createNews = async (payload) => {
  const useForm = hasImageFile(payload);
  const requestData = useForm ? buildFormData(payload) : payload;
  const { data } = await axios.post(NEWS_API, requestData, {
    headers: {
      "Content-Type": useForm ? "multipart/form-data" : "application/json",
      ...withAuth(),
    },
  });
  return data;
};

export const updateNews = async (id, payload) => {
  const useForm = hasImageFile(payload);
  const requestData = useForm ? buildFormData(payload) : payload;
  const { data } = await axios.put(`${NEWS_API}/${id}`, requestData, {
    headers: {
      "Content-Type": useForm ? "multipart/form-data" : "application/json",
      ...withAuth(),
    },
  });
  return data;
};

export const deleteNews = async (id) => {
  const { data } = await axios.delete(`${NEWS_API}/${id}`, {
    headers: { ...withAuth() },
  });
  return data;
};

export const updateNewsStatus = async (id, status) => {
  const { data } = await axios.patch(
    `${NEWS_API}/${id}/status`,
    { status },
    { headers: { ...withAuth() } }
  );
  return data;
};
