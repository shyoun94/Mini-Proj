import React from 'react'

export default function Section3() {
  return (
    <div>
      <section className="section3">
      <h2 className="get-title">획득한 음료</h2>
      <ul className="sel-drinks">
        <li>
          <img src="../images/redcola.svg" alt="" />
          Original_Cola
          <strong>1
            <span className="a11y-hidden">개</span>
          </strong>
        </li>
        <li>
          <img src="../images/greencola.svg" alt="" />
          Green_Cola
          <strong>2
            <span className="a11y-hidden">개</span>
          </strong>
        </li>
        <li>
          <img src="../images/orangecola.svg" alt="" /> 
          Orange_Cola
          <strong>1
            <span className="a11y-hidden">개</span>
          </strong>
        </li>
        <li>
          <img src="../images/violetcola.svg" alt="" />
          Violet_Cola
          <strong>5
            <span className="a11y-hidden">개</span>
          </strong>
        </li>
      </ul>
      <p className="total-price">총금액 : 9,000 원</p>
    </section>
    </div>
  )
}
