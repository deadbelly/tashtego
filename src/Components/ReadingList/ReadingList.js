import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ReadingList.css';

export const ReadingList = ({ readingList, setReadingList }) => {
  const books = readingList.map((book, index) => {
    return (
      <Draggable
      key={book.id}
      draggableId={book.id.toString()}
      index={index}
      >
        {(provided) => (
          <div
            className='list-item'
            key={book.id}
            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
          >
            <h2>{book.title}</h2>
            <h3> by {book.authors[0]}</h3>
          </div>
        )}
      </Draggable>
    )
  })

  const handleDrop = result => {
    if (result.destination) {
      const newList = Array.from(readingList)
      const [reorderedBook] = newList.splice(result.source.index, 1)
      newList.splice(result.destination.index, 0, reorderedBook)

      setReadingList(newList)
    }
  }

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="books">
        {provided => (
            <ul
              className='reading-list'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {books}
              {provided.placeholder}
            </ul>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}
