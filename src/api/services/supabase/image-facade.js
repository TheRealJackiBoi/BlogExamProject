import supabase from "./supabase";


export const IMAGE_BASE_URL = "https://ohxwvvhihamghnvpxswy.supabase.co/storage/v1/object/public/profile-pictures/" 

export const uploadImage = async ( file, username ) => {
 const { data, error } = await supabase.storage
    .from("profile-pictures")
    .upload(`/${username}/${file.name}`, file, {
      upsert: true,
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