import { useEffect, useState } from 'react'
import { Icon } from "react-icons-kit";
import {user as usericon} from 'react-icons-kit/fa/user'
import { getUsername } from '../api/services/auth/auth.js'

import { uploadImage, IMAGE_BASE_URL } from '../api/services/supabase/image-facade';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSettings = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const handleImageChange = async (e) => {
    e.preventDefault()
    const username = getUsername()
    if (!username) {
      console.error("Not logged in")
      return;
    }
    const fileFromInput = e.target.files[0]
    if (fileFromInput && fileFromInput.type === "image/png") {

      // change file name to "username.png"
      const file = new File([fileFromInput], `avatar.${fileFromInput.name.split(".").pop()}`, {type: fileFromInput.type})
      
      setImage(URL.createObjectURL(fileFromInput))
      const response = await uploadImage(file, username)
      if (response === 200) {
        console.log("Uploaded image")
      }
      
      return;
    }
    else {
      console.log("No file")
    }
  }

    useEffect(() => {
      const username = getUsername()
      if (!username) {
        console.error("Not logged in")
        navigate("/auth/login")
      }
      // set image to cdn url if its there
      const response = axios.get(`${IMAGE_BASE_URL}/${username}/avatar.png`)
      if (response.status === 404) {
        console.log("No image")
      }
      else {
        console.log("Got image")
        setImage(`${IMAGE_BASE_URL}/${username}/avatar.png`)
      }
    }, [])


  return (
    <section className="flex flex-col items-center justify-center max-w-prose px-4  h-fit mt-10 mx-auto">
      <div className='bg-dat-olive p-10 text-center relative w-full my-4'>
      <h2
        className="mb-3 text-2xl"
      >
        Settings
      </h2>
      
      
      <div class="relative w-12 mx-auto h-12 overflow-hidden bg-dat-white  rounded-full">
        {!image ? (
            <svg class="absolute w-14 h-14 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        ) : (
            <img src={image} alt="" class="absolute inset-0 w-full h-full object-cover" />
        )}
      </div>
      
        <p className='my-2'>To change profilepicture upload image below</p>

        {/* input field */}
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 my-4">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 ">Only .png</p>
          </div>
        <input id="dropzone-file" type="file" accept="image/png" className="hidden" onChange={handleImageChange}/>
        </label>
      </div> 
        </div>
      </section>
  )
}

export default UserSettings