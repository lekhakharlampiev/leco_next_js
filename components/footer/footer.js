import React from 'react'

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__autor">
          © 2019 Официальный сайт ООО "РЯЗАНСКИЙ КОНВЕЙЕРНЫЙ ЗАВОД"
        </div>
        <div className="footer__contacts">
          <a href="tel: +7 (4912) 57-58-90" className="footer__contacts__tel">+7 (4912) 57-58-90</a>
          <a href="/" className="footer__contacts__mail">info@lecotech.ru</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer