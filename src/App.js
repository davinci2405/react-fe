import { useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import List from "./component/List"
import "./css/style.css"

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "BTC/USTD",
      score: 100,
    },
    {
      id: 2,
      name: "DOT/USTD",
      score: 40,
    },
  ])

  const onDragEnd = (result) => {
    if (!result.destination) return
    if (
      result.source.droppableId === result.destination.droppableId &&
      result.source.index === result.destination.index
    )
      return
    const newItems = [...data]
    const draggedItem = newItems[result.source.index]
    newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, draggedItem)
    setData(newItems)
  }

  return (
    <div className="app">
      <h2>DragDropContext</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <List data={data} />
      </DragDropContext>
    </div>
  )
}

export default App
