import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"
import Contact from "./Contact"

const contacts = [
  { src: "https://links.papareact.com/zvy", name: "My Crush" },
  { src: "https://links.papareact.com/zvy", name: "My Crush 1" },
  { src: "https://links.papareact.com/zvy", name: "My Crush 2" },
  { src: "https://links.papareact.com/zvy", name: "My Crush 3" },
  { src: "https://links.papareact.com/zvy", name: "My Crush 4" },
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
