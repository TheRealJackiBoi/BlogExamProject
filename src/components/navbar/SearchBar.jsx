import { useState } from 'react'
import { getTopUsersnamesForNameSearch } from '../../api/services/userfacade'
import { getImagesForUsers } from '../../api/services/supabase/image-facade'
import { useNavigate } from 'react-router-dom'
import SearchBarDropdown from './SearchBarDropdown'

const SearchBar = () => {

  const navigate = useNavigate();

  const [inputStatus, setInputStatus] = useState("unfocused")
  const [inputValue, setInputValue] = useState("Search...")
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [notFoundSearch, setNotFoundSearch] = useState(false)

  const handleFocus = () => {
    setInputStatus("focused")
    setInputValue("")
    setNotFoundSearch(false)
  }


  const handleBlur = () => {
    setInputStatus("unfocused")
    setInputValue("Search...")
    
    setTimeout(() => {
      setSearchResults([])
      setSearching(false)
      setNotFoundSearch(false)
    }, 200)
  }

  const handleChange = async (e) => {
    setInputValue(e.target.value)
    
    if (e.target.value.length >= 1) {
      setSearching(true)
      const response = await getTopUsersnamesForNameSearch(e.target.value)
      
      if (response == null) {
        setSearching(false)
        setNotFoundSearch(true)
      }
      else if (response.length === 0) {
        console.log(err)
        setSearching(false)          
        setNotFoundSearch(true)
      }
      else {
        setSearchResults(response)
        setSearching(false)
        setNotFoundSearch(false)
      }
    }

    if (e.target.value.length === 0) {
      setSearchResults([])
    }
  }

  const handleUserClick = async (e) => {
    const username = e.target.getAttribute("data-username")

    navigate(`/posts/user/${username}`)
    
    setInputValue("Search...")
    setSearchResults([])
    setSearching(false)
    setNotFoundSearch(false)
    
  }

  return (
    <form id="searchprofiles" className="flex max-w-60 absolute left-1/2 -translate-x-1/2">
      <input
        type="text" 
        className="bg-dat-white border border-dat-black pl-2 rounded-full  w-full h-8 shadow-md shadow-gray-400" 
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

    {inputStatus === "focused" && (<SearchBarDropdown 
                                      searchResults={searchResults}
                                      searching={searching}
                                      notFoundSearch={notFoundSearch}
                                      handleUserClick={handleUserClick}
                                      />)}

    </form>
  )
}

export default SearchBar