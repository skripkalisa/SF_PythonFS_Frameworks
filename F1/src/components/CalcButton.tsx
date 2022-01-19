import React, { MouseEventHandler, useState } from 'react'

function CalcButton(props: {
  label: string
  cls: string
  handler: MouseEventHandler<HTMLButtonElement>
}) {
  let classes = 'calc-button btn' + '-' + props.cls
  if (props.label === '0' || props.label === '=') classes += ' wide'
  return (
    <>
      <button className={classes} onClick={props.handler}>
        {props.label}
      </button>
    </>
  )
}
export default CalcButton
