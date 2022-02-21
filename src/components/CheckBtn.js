import React from 'react'

export default function CheckBtn({checked, onClick}) {
  return (
      <button
          type="button"
          className=""
          onClick={onClick}>
        {
          checked
              ? '✅'
              : '☑️'
        }
      </button>
  )
}
