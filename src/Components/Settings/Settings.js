import React from 'react';

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
    <>
      <input
        name='lockList'
        type='checkbox'
        checked={settings.lockList}
        onChange={updateSettings}
      />
      <input
        name='lockDate'
        type='checkbox'
        checked={settings.lockDate}
        onChange={updateSettings}
      />
      <input
        name='defaultDays'
        type='number'
        value={settings.defaultDays}
        onChange={updateSettings}
      />
    </>
  )
}
