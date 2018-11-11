import React from 'react'

export default () => (
  <div className="w1140">
    <div className="top-sec__big-pad z8 rel">
      <p className="white title-v1">
        Welcome to a{' '}
        <span className="m-color">financial system of the future!</span>
      </p>
      <h1 className="id-title white">
        OASIS – the international community of financially independent
        people,which are <br />
        <span className="m-color">
          united by principles of trust and mutual aid.
        </span>
      </h1>
      <div className="buttonss">
        <a className="button button_border mr30" href="#about">
          About OASIS fund
        </a>
        <a
          href="https://etherscan.io/address/0x0a5155ad298ccfd1610a00ed75457eb2d8b0c701"
          target="_blank"
          className="button button_yl"
        >
          Join
        </a>
      </div>
    </div>
    <div className="double-b">
      <div className="row">
        <div className="col-1-3">
          <div className="about flex">
            <img
              className="about__icons"
              src="static/img/general/pic00.svg"
              alt=""
            />
            <div className="about__right">
              <p className="about__text">Participants</p>
              <p className="about__num">
                <span id="fundInvestors">0</span>
              </p>
            </div>
          </div>
          <div className="about flex">
            <img
              className="about__icons"
              src="static/img/general/pic1.svg"
              alt=""
            />
            <div className="about__right">
              <p className="about__text">Paid to participants</p>
              <p className="about__num">
                <span id="fundPayed">0</span> eth
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-4">
          <div className="about flex">
            <img
              className="about__icons"
              src="static/img/general/L0001.png"
              alt=""
            />
            <div className="about__right">
              <p className="about__text">Fund balance</p>
              <p className="about__num">
                <span id="fundBalance">0</span> eth
              </p>
            </div>
          </div>
          <div className="about flex">
            <img
              className="about__icons"
              src="static/img/general/pic3.svg"
              alt=""
            />
            <div className="about__right">
              <p className="about__text">Donated to</p>
              <p className="about__num">
                <span id="fundCharity">0</span> eth
              </p>
            </div>
          </div>
        </div>
        <div className="col-2-5">
          <div className="about about_pad-l flex">
            <img
              className="about__icons about__icons_mr mob-hide"
              src="static/img/general/pic2.png"
              alt=""
              width="24"
            />
            <div className="about__right">
              <p className="about__text about__text_mb13">
                Recent transactions
              </p>
              <div className="df" id="fundTransactions" />
            </div>
          </div>
        </div>
      </div>
      <div className="black-bord" />
    </div>
  </div>
)
