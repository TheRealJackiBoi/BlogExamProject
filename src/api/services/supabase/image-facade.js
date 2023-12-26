import supabase from "./supabase";


export const uploadImage = async (file, username) => {
  file.name = `${username}.${file.name.split(".").pop()}`;
  console.log(file.name);
  const { data, error } = await supabase.storage
    .from("profile-pictures")
    .upload(`/${file.name}`, file);
  if (error) {
    console.error("Could not upload image", error);
    return null;
  }
  return data;
}