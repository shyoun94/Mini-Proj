import React from 'react'

export default function Section2(props) {
  return (
    <>
      <section className="section2">
      <div className="bg-box">
        <h2 className="title">소지금</h2>
        <p><strong>{props.myMoney}</strong></p>
      </div>
    </section>
    </>
  )
}
