import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ReadingList.css';

export const ReadingList = ({ readingList, setReadingList, isLocked }) => {
  const removeBook = id => {
    setReadingList(readingList.filter(book => book.id !== id));
  }

  const books = readingList.map((book, index) => {
    return (
      <Draggable
      key={book.id}
      draggableId={book.id.toString()}
      isDragDisabled={isLocked}
      index={index}
      >
        {(provided) => (
          <div
            className='list-item'
            key={book.id}
            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
          >
            <img
              className='thumbnail'
              src={book.cover}
              alt={book.alt}
            />
            <div className='item-info'>
              <h2>{book.title}</h2>
              <h3> by {book.authors[0]}</h3>
              <button
                className='controlbtn'
                onClick={() => removeBook(book.id)}
              >Remove</button>
            </div>
            <h1 className='list-num'>{index + 1}</h1>
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
