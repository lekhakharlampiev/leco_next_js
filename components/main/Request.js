import React from 'react'

function Request() {
  return (
    <article className="request">
      <div className="request-mask">
        <div className="request__inner">
          <div className="request__icon" />
          <div className="request__text">
            Расчитайте стоимость конвейера<br />
            ONLINE за 5 минут
                        </div>
          <button type="button" className="button request__button">начать расчет</button>
        </div>
      </div>
    </article>
  )
}
export default Request