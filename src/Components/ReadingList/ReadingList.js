import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { formatAuthors } from '../../util'
import './ReadingList.css';
import PropTypes from 'prop-types';

export const ReadingList = ({ readingList, setReadingList, isListLocked }) => {
  const removeBook = id => {
    setReadingList(readingList.filter(book => book.id !== id));
  }

  const books = readingList.map((book, index) => {
    return (
      <Draggable
      key={book.id}
      draggableId={book.id.toString()}
      isDragDisabled={isListLocked}
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
              <h3> by {formatAuthors(book.authors)}</h3>
              <button
                className='controlbtn'
                disabled={isListLocked}
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
      {!readingList.length &&
        <h1 className='landing-message'>
        It looks like there's nothing here! <br/>
        Trying searching for some books to add to your list!</h1>
      }
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

ReadingList.propTypes = {
  readingList: PropTypes.arrayOf(PropTypes.object),
  setReadingList: PropTypes.func,
  isListLocked: PropTypes.bool
}
