import Username from "./Username";

const PostInformation = ({ date, username }) => {

  const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex justify-between my-1 -mb-1">
      <p className="inline-block text-xs text-gray-500 mt-2">
        {formatDateString(date.slice(0, 10))}
      </p>

      <Username username={username} />
    </div>
  );
};

export default PostInformation;
