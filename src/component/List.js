import ListItem from "./ListItem"
import { Droppable } from "react-beautiful-dnd"

function List(props) {
  const { data } = props

  return (
    <div className="list">
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className="list-content"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data?.map((item, index) => (
              <ListItem key={index} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default List
