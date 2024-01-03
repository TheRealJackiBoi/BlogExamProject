import supabase from "./supabase";
import axios from "axios";

export const IMAGE_BASE_URL = "https://ohxwvvhihamghnvpxswy.supabase.co/storage/v1/object/public/profile-pictures/" 

export const uploadImage = async ( file, username ) => {
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
  }
  else {
    console.log("Image uploaded successfully");
  }
  return data;
}


export const getImage = async ( username ) => {
  const response = axios.get(`${IMAGE_BASE_URL}/${username}/avatar.png`)
    if (response.status === 404) {
      console.log("No image")
      return null
    }
    else {
      console.log("Got image")
      return `${IMAGE_BASE_URL}/${username}/avatar.png`
    }
  }


export const getImagesForUsers = async ( usernames ) => {
  const usernamesWithImages = []
  for (const username of usernames) {
    const image = await getImage(username.username)
    usersWithImages.push({...username, image})
  }

  return usernamesWithImages;
}