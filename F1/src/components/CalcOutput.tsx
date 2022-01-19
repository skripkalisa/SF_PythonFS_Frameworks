import React, { useState } from 'react'

function CalcOutput(props: any) {
  return (
    <>
      <h4 className="display-expression">
        {props.expr ? props.expr : <br />}{' '}
      </h4>

      <h4 className="display-input">{props.display}</h4>
    </>
  )
}
export default CalcOutput
