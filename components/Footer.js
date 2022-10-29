import React from 'react'

export default function Footer() {
  return (
    <>
    <footer id="footer" className="container-fluid mt-0">
        <div className="row text-center footer d-flex justify-content-center">
            <p className="footer__paragraph mb-0"><a href="#" className="footer__link">DEV Community</a> 👩‍💻👨‍💻 — A
                constructive and inclusive social network for software developers. With
                you every step of your journey.</p>
            <p className="footer__paragraph">Built on <a href="#" className="footer__link">Forem</a> — the <a href="#"
                    className="footer__link">open source</a> software that powers <a href="#" className="footer__link">DEV</a>
                and other inclusive communities.<br />
                Made with love and <a href="#" className="footer__link">Ruby on Rails </a>. DEV Community 👩‍💻👨‍💻 © 2016
                - 2022.
            </p>
            <a href="#" className="footer__imgAnchor">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer__imgAnchor--svg">
                    <g clip-path="url(#clip0)" fill="#1AB3A6">
                        <path
                            d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z">
                        </path>
                    </g>
                </svg>

            </a>
        </div>
    </footer>
    </>
  )
}
