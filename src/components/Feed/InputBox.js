import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid"
import AvatarIcon from "../../assets/img/avatar.svg"

function InputBox() {
  const sendPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-2 items-center">
        <img
          className="rounded-full"
          src={AvatarIcon}
          alt=""
          width={40}
          height={40}
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder="What's on your mind, Phương?"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />
          <button hidden type="submit" onClick={sendPost} className="hidden">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-top-width-1">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
