function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 lg:h-44 lg:w-56 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pluse">
      <img
        className="absolute opacity-0 lg:opacity-100 rounded-full lg:rounded-3xl z-50 top-5 left-5 border-4 border-blue-500"
        alt=""
        src={profile}
        width={40}
        height={40}
      />
      <img
        className="object-filter brightness-75 rounded-full lg:rounded-2xl object-cover md:h-20 lg:h-44 lg:w-56 shadow-md"
        alt=""
        src={src}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-0.5 left-6 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  )
}

export default StoryCard
