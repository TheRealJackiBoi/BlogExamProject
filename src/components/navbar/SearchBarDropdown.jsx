

const SearchBarDropdown = ({ searchResults, searching, notFoundSearch, handleUserClick }) => {

  return (
    <div className="bg-dat-olive top-12 right-1 flex flex-col z-10 divide-y divide-dat-white rounded-lg shadow w-full absolute left-1/2 -translate-x-1/2">


      { searching && (
        <div className="px-2 py-1">Searching...</div>
      ) }

      { notFoundSearch && (
        <div className="px-2 py-1">No results found</div>
      ) }

      { searchResults.length !== 0 && searchResults.map((result, index) => (
        <div 
          key={index} 
          className="px-2 py-1 cursor-pointer hover:bg-dat-white hover:decoration-neutral-400"
          data-username={result.username}
          onClick={handleUserClick}
        >
          {result.username}
        </div>
      ))}
    </div>
  )
}

export default SearchBarDropdown