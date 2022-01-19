import React, { useState } from 'react'

function CalcButtonOper(props: { oper: string }) {
  return (
    <>
      <button className="calc-button btn-oper">{props.oper}</button>
    </>
  )
}
export default CalcButtonOper
