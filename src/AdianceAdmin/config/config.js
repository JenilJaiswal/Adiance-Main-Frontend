const config = {
  // Change this URL based on your deployment environment
  BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000",
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images` : "http://localhost:5000/uploads",
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/placeholder.svg";
  // console.log("imagePath : ", imagePath);
  // If the image path is already a full URL, return it as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Extract filename if path includes directories like uploads/
  const parts = imagePath.split("/");
  const filename = parts[parts.length - 1];
  return `${config.BACKEND_URL}/${encodeURIComponent(filename)}`;
};

export default config;
