import React from 'react';

export const Settings = ({ settings, setSettings }) => {
  const updateSettings = event => {
    console.log(event.target.checked)
    setSettings({
      ...settings,
      [event.target.name]:
        (event.target.type === 'number' ?
          event.target.value :
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
        checked={null}
        value={settings.defaultDays}
        onChange={updateSettings}
      />
    </>
  )
}
