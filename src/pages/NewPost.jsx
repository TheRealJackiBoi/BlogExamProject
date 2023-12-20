import { createPost, getUsername } from "../api/services/auth/auth";

export function NewPost({ closeModal, showModal }) {

  const [formData, setFormData] = useState({
    title: '',
    postbody: '',
  });
  
  const handlePostSubmit = (e) => {
    e.preventDefault();

    // logging for testing
    console.log('Title:', formData.title);
    console.log('Post Body:', formData.postbody);

    const username = getUsername();
    console.log('Username:', username);
    const visibility = 'public';

    createPost(formData.title, formData.postbody, username, visibility)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
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
      
          <form onSubmit={handlePostSubmit} className="my-4">
            <div className="my-4">
              <label htmlFor="title" className="dat-black">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <textarea
                type="text"
                name="postbody"
                value={formData.postbody}
                onChange={handleChange}
                placeholder="What is on your mind today?"
                className="w-full h-24 border border-gray-300 rounded p-2 resize-none focus:outline-none"
                />
            </div>
            <div className="flex justify-center mt-3">
              <button type="submit" className="bg-dat-olive text-dat-black px-4 py-2 rounded">
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
