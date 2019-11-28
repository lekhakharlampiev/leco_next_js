import React from 'react'

function Quote() {
  return (
    <article className="quote">
      <div className="quote__inner">
        <div className="quote__content">
          <blockquote className="quote__text">
            <p>
              Мы верим, что с нашей помощью, Российская<br />
              промышленность станет эффективнее и сильнее в мировой<br />
              экономике. В планах на 2020 год продажи нашего продукта<br />
              на внешние рынки.
                            </p>
            <div className="quote__autor"><b>Николай Скворцов</b>, Директор</div>
          </blockquote>
          <div className="quote__autor__avatar"></div>
        </div>
      </div>
    </article>
  )
}
export default Quote