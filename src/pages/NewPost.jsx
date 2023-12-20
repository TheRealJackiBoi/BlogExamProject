export function NewPost({ closeModal, showModal }) {
  
  const handlePostSubmit = (e) => {
    
  }
  
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-dat-black bg-opacity-50">
        <div className="bg-dat-white p-6 rounded shadow-md w-full max-w-md relative">
          <h1 className="text-center text-lg font-bold mb-10">New Post</h1>
          <button
            onClick={closeModal}
            className="text-sm bg-dat-red px-2 py-1.5 rounded border border-grey-300 absolute top-0 left-0 mt-4 ml-4"
          >
            Cancel
          </button>
      
          <form className="my-4">
            <div className="my-4">
              <label htmlFor="title" className="dat-black">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <textarea
                type="text"
                name="postbody"
                placeholder="What is on your mind today?"
                className="w-full border border-gray-300 rounded p-2 resize-none focus:outline-none"
                />
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={{}} className="bg-dat-olive text-dat-black px-4 py-2 rounded">
                Post to Blogged
              </button>
            </div>
          </form>
        </div>
      </div>
      
      )}
    </>
  );
}

export default NewPost;
