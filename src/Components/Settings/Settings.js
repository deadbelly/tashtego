import React from 'react';
import './Settings.css';
import PropTypes from 'prop-types';

export const Settings = ({ settings, setSettings }) => {
  const updateSettings = event => {
    setSettings({
      ...settings,
      [event.target.name]:
        (event.target.type === 'number' ?
          parseInt(event.target.value) :
          event.target.checked)
    })
  }

  return (
    <div className='settings'>
      <h1>
        <label htmlFor='lockList'>Lock List</label>
        <input
          className='setting-input'
          name='lockList'
          type='checkbox'
          checked={settings.lockList}
          onChange={updateSettings}
        />
      </h1>
      <h2>This option prevents you from adding or removing books
      from your reading list</h2>
      <h1>
        <label htmlFor='lockDate'>Lock Date</label>
        <input
          className='setting-input'
          name='lockDate'
          type='checkbox'
          checked={settings.lockDate}
          onChange={updateSettings}
        />
      </h1>
      <h2>This option prevents you from changing
      the intended completion date of a book</h2>
      <h1>
        <label htmlFor='defaultDays'>Default Days </label>
        <input
          className='setting-input'
          name='defaultDays'
          type='number'
          min='1'
          value={settings.defaultDays}
          onChange={updateSettings}
        />
      </h1>
      <h2>This option changes the number of days you expect
      to read a book by default</h2>
    </div>
  )
}

Settings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func
}
