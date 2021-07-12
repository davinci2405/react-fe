import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid"
import AvatarIcon from "../../assets/img/avatar.svg"

const displayDate = () => {
  let today = new Date()
  let curDate = new Date().toLocaleDateString()
  let curTime = today.getHours() + ":" + today.getMinutes()
  return curDate + ", " + curTime
}

const posts = [
  {
    avatar: AvatarIcon,
    name: "Thắng Nguyễn",
    time: displayDate,
    content: "Anh giai Tây Ninh cần tìm một nửa của đời mình. :3",
  },
  {
    avatar: AvatarIcon,
    name: "Huy Trung",
    time: displayDate,
    content: "Ich liebe dich Dim <3",
  },
  {
    avatar: AvatarIcon,
    name: "Phương Duy",
    time: displayDate,
    content: "Con gà Thiện !!!",
  },
]

function Post() {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <>
          <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
              <img
                className="rounded-full"
                src={post.avatar}
                alt=""
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">{post.name}</p>
                <p className="text-xs text-gray-400">{post.time}</p>
              </div>
            </div>

            <p className="pt-4">{post.content}</p>
          </div>

          {/* Body of post */}
          {/* <div className="relative h-56 md:h-96 bg-white">
            <img src="" alt="" />
          </div> */}

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
        </>
      ))}
    </div>
  )
}

export default Post
