import { Draggable } from "react-beautiful-dnd"

function ListItem(props) {
  const { item, index } = props
  return (
    <Draggable draggableId={"id-" + index} index={index} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="list-item"
        >
          {item.name} - {item.score}
        </div>
      )}
    </Draggable>
  )
}

export default ListItem
