import supabase from "./supabase.js";
import axios from "axios";

export const IMAGE_BASE_URL =
  "https://ohxwvvhihamghnvpxswy.supabase.co/storage/v1/object/public/profile-pictures";

export const uploadImage = async (file, username) => {
  const { data, error } = await supabase.storage
    .from("profile-pictures")
    .upload(`/${username}/${file.name}`, file, {
      upsert: true,
      cacheControl: "3600",
      contentType: "image/png",
    });
  if (error) {
    console.error("Could not upload image", error);
    return null;
  } else {
    console.log("Image uploaded successfully");
  }
  return data;
};

export const getImage = async (username) => {
  try {
    const response = await axios.get(
      `${IMAGE_BASE_URL}/${username}/avatar.png`
    );
    if (response.status === 404 || response.status === 400) {
      console.log("No image");
      return "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";
    } else {
      console.log("Got image");
      return `${IMAGE_BASE_URL}/${username}/avatar.png`;
    }
  } catch (error) {
    console.log("Could not get image");
    return "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";
  }
};

export const getImagesForUsers = async (usernames) => {
  const usernamesWithImages = [];
  for (const username of usernames) {
    const image = await getImage(username);
    if (image === null) {
      usernamesWithImages.push({
        "username": username,
        "imageurl":
          "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
      });
      continue;
    } else {
      usernamesWithImages.push({ "username": username, "imageurl": image });
    }
  }

  return usernamesWithImages;
};
