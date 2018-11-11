import React from 'react'
import Tabs from 'components/Tabs'
import Button from 'components/Button'
import FirstImage from 'assets/img/general/fond1.svg'

const AboutTabs = props => (
  <Tabs>
    <div label="Life quality" image={FirstImage}>
      <div className="w1140">
        <div className="row">
          <div className="col-1-2 rel">
            <img
              className="pictur-in-tab"
              src="static/img/general/bg-tab1.jpg"
              alt=""
            />
          </div>
          <div className="col-1-2">
            <h4 className="title-mini">Life quality </h4>
            <p>
              Any socially oriented community of adherents are united by the
              single purpose or by the several uniting factors which steadily
              create basis for development of growth and the life quality
              improvement of each member. The OASIS is the main uniting factor
              and technologically created social financial tool which is
              individually creats the most comfortable conditions for a better
              life and financial freedom of those who appreciate safety, mutual
              aid and equitable distribution of material benefits among all
              persons in need.
            </p>
            <p>
              It is important to understand that the high level of a life
              quality for an each OASIS member isn’t privilege if you became a
              part of OASIS. It is norm for any member and advantage before
              those who for one reason or another couldn’t estimate fully all
              magnificence and social security of participation in OASIS yet.
            </p>
            <div className="buttonss">
              <Button type="a" nature="light" margin="0 30px 0 0" href="#miss">
                OUR MISSION
              </Button>
              <Button
                type="a"
                nature="primary"
                target="_blank"
                href="https://etherscan.io/address/0x0a5155ad298ccfd1610a00ed75457eb2d8b0c701"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div label="Croc">
      After 'while, <em>Crocodile</em>!
    </div>
    <div label="Sarcosuchus">
      Nothing to see here, this tab is <em>extinct</em>!
    </div>
  </Tabs>
)

AboutTabs.propTypes = {}

export default AboutTabs
