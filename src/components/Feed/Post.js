import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid"
import Husqvarna from "../../assets/img/husqvarna.jpeg"
import AvatarIcon from "../../assets/img/avatar.svg"

const displayDate = () => {
  let today = new Date()
  let curDate = new Date().toLocaleDateString()
  let curTime = today.getHours() + ":" + today.getMinutes()
  return curDate + ", " + curTime
}

function Post() {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={AvatarIcon}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">My Crush</p>
            <p className="text-xs text-gray-400">{displayDate() }</p>
          </div>
        </div>

        <p className="pt-4">Yoooooo</p>
      </div>

      {/* Body of post */}
      {/* {Husqvarna && (
        <div className="relative h-56 md:h-96 bg-white">
          <img
            className="object-cover"
            src={Husqvarna}
            alt=""
            style={{
                minHeight: "400px"
            }}
          />
        </div>
      )} */}

      {/* Footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-b-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-b-2xl">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-b-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
