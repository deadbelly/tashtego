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
      <label htmlFor='lockList'>Lock List</label>
      <input
        name='lockList'
        type='checkbox'
        checked={settings.lockList}
        onChange={updateSettings}
      />
        <label htmlFor='lockDate'>Lock Date</label>
      <input
        name='lockDate'
        type='checkbox'
        checked={settings.lockDate}
        onChange={updateSettings}
      />
      <label htmlFor='defaultDays'>Default Days</label>
      <input
        name='defaultDays'
        type='number'
        value={settings.defaultDays}
        onChange={updateSettings}
      />
    </div>
  )
}

Settings.propTypes = {
  settings: PropTypes.object,
  setSettings: PropTypes.func
}
