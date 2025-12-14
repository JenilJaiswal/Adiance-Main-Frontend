import axios from "axios";

// https://backend.adiance.com/api
// process.env.REACT_APP_API_URL ||
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const withAuth = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("jwtToken") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const hasFiles = (data) => {
  if (data.content?.mainImage instanceof File) return true;
  if (data.content?.headingsAndImages) {
    return data.content.headingsAndImages.some(
      (item) => item.type === "imageVideo" && item.content.file instanceof File
    );
  }
  return false;
};

const prepareFormData = (data) => {
  const formData = new FormData();
  if (data.content?.mainImage instanceof File) {
    formData.append("mainImage", data.content.mainImage);
    data.content.mainImage = null;
  }

  // Handle image/video files from headingsAndImages
  if (data.content?.headingsAndImages) {
    let imageVideoIndex = 0;
    data.content.headingsAndImages.forEach((item, index) => {
      if (item.type === "imageVideo" && item.content.file instanceof File) {
        formData.append("imageVideo", item.content.file);
        data.content.headingsAndImages[index].content.imageIndex =
          imageVideoIndex;
        data.content.headingsAndImages[index].content.file = null;
        imageVideoIndex++;
      }
    });
  }

  formData.append("formattedData", JSON.stringify(data));
  return formData;
};

export const createBlog = async (data) => {
  // console.log("createBlog data:", data);
  const hasFileUploads = hasFiles(data);
  const requestData = hasFileUploads ? prepareFormData(data) : data;
  const response = await axios.post(`${API_URL}/blogs`, requestData, {
    headers: {
      "Content-Type": hasFileUploads
        ? "multipart/form-data"
        : "application/json",
      ...withAuth(),
    },
  });
  return response.data;
};

export const getBlogs = async (
  page = 1,
  limit = 10,
  search = "",
  sortOrder = "latest",
  status = "published"
) => {
  const params = { page, limit, search, sort: sortOrder };
  // Only add status to params if it's not empty and not "all"
  if (status && status !== "" && status !== "all") {
    params.status = status;
  }
  const response = await axios.get(`${API_URL}/blogs`, {
    params,
    headers: { ...withAuth() },
  });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/blogs/${id}`, {
    headers: { ...withAuth() },
  });
  return response.data;
};

// Fetch single blog by SEO-friendly urlWords (new schema)
export const getBlogByUrlWords = async (urlWords) => {
  const response = await axios.get(
    `${API_URL}/blogs/urlWords/${encodeURIComponent(urlWords)}`,
    { headers: { ...withAuth() } }
  );
  return response.data;
};

export const updateBlog = async (id, data) => {
  const hasFileUploads = hasFiles(data);
  const requestData = hasFileUploads ? prepareFormData(data) : data;
  const response = await axios.put(`${API_URL}/blogs/${id}`, requestData, {
    headers: {
      "Content-Type": hasFileUploads
        ? "multipart/form-data"
        : "application/json",
      ...withAuth(),
    },
  });
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/blogs/${id}`, {
    headers: { ...withAuth() },
  });
  return response.data;
};

export const updateBlogStatus = async (id, status) => {
  const response = await axios.patch(
    `${API_URL}/blogs/${id}/status`,
    { status },
    { headers: { ...withAuth() } }
  );
  return response.data;
};

// Delete file from uploads folder
export const deleteFile = async (filename) => {
  // console.log("Deleting file:", filename);
  const safeName = encodeURIComponent(filename);
  const response = await axios.delete(
    `https://backend.adiance.com:443/upload/${safeName}`
    // `http://localhost:5000/upload/${safeName}`         
  );
  return response.data;
};

// Send contact email (blog contact form)
export const sendContactEmail = async ({ fullName, email, phone, message }) => {
  const payload = {
    name: fullName,
    email,
    phone,
    message,
    formType: "Blog",
  };
  const response = await axios.post(`${API_URL}/send-email-adiance`, payload);
  return response.data;
};
