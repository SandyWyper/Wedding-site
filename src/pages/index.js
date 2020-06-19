import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic04 from '../assets/images/smootchin1.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Map from '../components/Map'
import { navigate } from 'gatsby'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const query = graphql`
  query {
    tipiOne: file(relativePath: { eq: "tipi-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tipiTwo: file(relativePath: { eq: "tipi-2.jpg" }) {
      childImageSharp {
        fluid(sizes: "(min-width:980px)40vw,90vw") {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bedSteps: file(relativePath: { eq: "bed-steps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      names: '',
      attending: undefined,
      thoseAttending: '',
      additionalInfo: '',
      camping: false,
      email: '',
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render(props) {
    return (
      <Layout>
        <Helmet title="Jenny &amp; Sandy" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="where-and-when" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Come &amp; Celebrate!</h2>
                  <p className="courgette">
                    We cordially invite you to join us for a day of
                    celebrations, to witness the marriage of Miss
                    Jennifer&nbsp;Simpson and young Master Alexander&nbsp;Wyper.
                  </p>
                </header>
                <p className="text-left">
                  We would be honoured by your presence as we tie the knot,
                  enjoying wonderful company in a wonderful location, from
                  1:30pm on Saturday 5th June 2021.
                  <br /> Sat atop the cliffs on this stunning stretch of
                  coastline; the venue holds a special place for both of us, and
                  we cannot think of a better place to share our big day with
                  you all. There will be celebrations and feasting, all topped
                  off with a ceilidh - so bring your dancing shoes!
                </p>
                <div className="venue-shots">
                  <div className="img">
                    <Img
                      fluid={this.props.data.tipiOne.childImageSharp.fluid}
                      alt="Wild Tipis"
                    />
                  </div>
                  <div className="img">
                    <Img
                      fluid={this.props.data.bedSteps.childImageSharp.fluid}
                      alt="Bedruthen Steps Beach"
                    />
                  </div>
                </div>
              </div>
              <span className="image">
                <img src={pic04} alt="Jenny and Sandy" />
              </span>
            </div>
          </section>

          <section id="RSVP" className="main special">
            <header className="major">
              <h2>RSVP</h2>
              <p>Please RSVP by 5th April 2021</p>
            </header>
            <form
              method="post"
              name="Wedding-RSVP"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              action="/thank-you/"
            >
              <input type="hidden" name="form-name" value="Wedding-RSVP" />
              <input
                type="hidden"
                name="bot-field"
                onChange={this.handleChange}
              />
              <div className="field">
                <label htmlFor="names">Name(s) on the invitation - </label>
                <input
                  type="text"
                  name="names"
                  id="names"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="attending">Please select one - </label>
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="attending"
                  id="attending"
                  required
                >
                  <option value="undefined">please select an option</option>
                  <option value="All will attend">We'll be there!</option>
                  <option value="We can't make it">
                    Sorry, we can't make it.
                  </option>
                  <option value="Some can't make it">
                    Some of us can't make it.
                  </option>
                </select>
              </div>

              <div
                className={
                  this.state.attending === "Some can't make it"
                    ? 'field'
                    : 'field hidden'
                }
              >
                <label htmlFor="thoseAttending">
                  Those who will be attending -
                </label>
                <input
                  type="text"
                  name="thoseAttending"
                  id="thoseAttending"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="additionalInfo">
                  If you have any dietary requirements, please state what they
                  are and who they apply to. If you have small children that
                  need a highchair, we can rent one for you, just let us know
                  how many you need.
                </label>
                <textarea
                  name="additionalInfo"
                  id="additionalInfo"
                  rows="4"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div className="field">
                <label htmlFor="camping">
                  Will you be camping on site? There's plenty of room, and you
                  can change your mind nearer the time, but we'd like to get a
                  feel for how many campers will be joining us.
                </label>
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="camping"
                  id="camping"
                  required
                >
                  <option value="undefined">please select an option</option>
                  <option value="Yes, camping.">Yes</option>
                  <option value="Not camping">No</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="email">
                  In case we need to get in touch with you nearer the time,
                  please leave your email address.
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="song">Suggest a song - </label>
                <input
                  type="text"
                  name="song"
                  id="song"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>

              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="special" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
          </section>

          <section id="venue" className="main special">
            <header className="major">
              <h2>The Venue</h2>
            </header>
            <p className="text-left">
              The wedding ceremony and reception will take place in giant
              teepees at Bedruthan Steps camping field, just north of the
              village of Mawgan Porth, near Newquay, Cornwall. We ask all guests
              to arrive at 1.30pm, the ceremony will start at 2.00pm. You can
              join us in camping on site, or there will be a shuttle bus running
              back to Newquay, so you may prefer accomodation along this route.
            </p>
            <div className="text-image-container">
              <p>
                Although this coast can have stunning weather, it is rather
                exposed so we recommend coming prepared. It can be blistering
                hot or, if the wind comes from the north, it can be a bit
                chilly, especially in the evening so make sure to bring layers.
                Due to the nature of the site, we strongly recommend flat shoes
                for your own comfort and safety (and ceilidh dancing). The tents
                are huge, so if the heavens were to open then we should all
                remain warm and dry and have a great view all the same. The
                field is right above the beach, however there was a rock slide
                in the winter so the steps remain closed at the moment.
              </p>
              <Img
                fluid={this.props.data.tipiTwo.childImageSharp.fluid}
                alt="Wild Tipis"
                className="img"
              />
              {/* <img src={tipiTwo} alt="Wild Tipis" /> */}
            </div>

            <p className="text-left">
              Bedruthan Steps has been officially accredited with Dark Sky
              Discovery Status, which means that it is away from the worst of
              any local light pollution and provides excellent stargazing
              conditions so make sure you are warm enough to enjoy it should the
              skies be clear enough.
            </p>
            <div className="directions-container">
              <ul className="actions">
                <li>
                  <a
                    href="https://www.google.com/maps/dir//50.4859372,-5.0299518/@50.4799437,-5.0225433,15z/data=!4m2!4m1!3e0?hl=en&authuser=0"
                    className="button special"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                </li>
              </ul>
              <p className="text-left">
                The shuttle bus will be running from around 7pm onwards, but we
                ask that you make your own way to the venue. It's about a 15
                minute drive from Newquay.
              </p>
            </div>
            <div className="mb-2">
              <Map />
            </div>
            <div className="text-left">
              <h3>Dresscode</h3>
              <p>
                It is a wedding so worth dressing up for but we are happy for
                you to wear whatever is comfortable. Kilts welcome! Remember to
                wear (or at least bring) flat shoes and a warm coat. If you are
                local and able to, we encourage you to bring along a blanket or
                two so we can all keep cosy having a drink around an open fire.
              </p>
              <h3>Drinks</h3>
              <p>
                We will be providing a free bar of wine, beer, cider and soft
                drinks for you to enjoy throughout the day and evening. For the
                evening reception, if you would like to bring any spirits along
                with you to contribute to the bar, we will provide the mixers,
                fruit, ice, etc. You will not need to pay for drinks so no need
                to worry about bringing cash.
              </p>
              <h3>Children</h3>
              <p>
                Your children are more than welcome on the day. There will be a
                kids’ play tent available where kids can play together and make
                friends. Maybe bring a toy along to play with so mum and dad can
                enjoy a prosecco or five!
              </p>
            </div>
          </section>

          <section id="accommodation" className="main special">
            <header className="major">
              <h2>Accommodation</h2>
            </header>
            <p className="text-left">
              There will be free camping available onsite for tents or
              campervans, with toilets, showers and running water available for
              your use. Camping is available from Thursday to Monday but be
              aware that there will be people around to set up/take down the
              wedding teepees and other equipment on the days surrounding the
              wedding. If you would like to camp and would like help sourcing a
              tent and other camping gear, we will see what we can do for you.
              We can also recommend a glamping tent hire company,{' '}
              <a
                href="http://www.ysellacornwall.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ysella Glamping
              </a>
              , who can provide and set everything up for you.
            </p>
            <p className="text-left">
              Alternatively, there is a huge amount of accommodation available
              in the local area. Newquay is where we live and the travel hub for
              this part of Cornwall. There is the biggest selection of
              accommodation in Newquay, but the areas of Watergate Bay and
              Mawgan Porth also have accommodation and will be closer to the
              wedding venue but have less in the way of amenities. If you need
              any help whilst booking travel or accommodation, we are happy to
              give you advice.
            </p>
            <p className="text-left">
              We have attached links to help you find accommodation suited to
              your needs and budget. If you are unsure of the location, just get
              in touch to ask us.
            </p>
            <ul className="booking-links">
              <li>
                <span className="icon fa-external-link-square"></span>
                <a
                  href="https://www.booking.com/city/gb/newquay.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AunZkPUFwAIB;sid=282c0fce16b9896c972a50e45c4c6de8;breadcrumb=searchresults_irene;srpvid=2d0257c6938e000a&"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Booking.com
                </a>
              </li>
              <li>
                <span className="icon fa-external-link-square"></span>
                <a
                  href="https://www.airbnb.co.uk/s/Newquay/homes?tab_id=all_tab&refinement_paths%5B%5D=%2Fhomes&query=Newquay&place_id=ChIJh1a5WhEMa0gRY1JU4PEam8Q&source=structured_search_input_header&search_type=search_query"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AirBnB
                </a>
              </li>
              <li>
                <span className="icon fa-external-link-square"></span>
                <a
                  href="https://www.travelodge.co.uk/hotels/407/Newquay-Seafront-hotel?WT.tsrc=GHA_Organic&utm_campaign=GHA_Newquay%20Seafront&utm_medium=GHA_Organic&utm_source=google"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Lodge
                </a>
              </li>
              <li>
                <span className="icon fa-external-link-square"></span>
                <a
                  href="https://www.premierinn.com/gb/en/hotels/england/cornwall/newquay/newquay-seafront.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Premier Inn*
                </a>
              </li>
            </ul>
            <p className="w-80">
              *Please note that the Premier Inn in Quintrell Downs is a 10-15
              minute drive from Newquay centre and not en route for transport
              back to Newquay on the evening of the wedding. The Premier Inn
              Seafront, however, is close to the centre of Newquay and on the
              shuttle route.
            </p>
          </section>

          <section id="travel" className="main special">
            <header className="major">
              <h2>Travel</h2>
            </header>

            <div>
              <div className="travel-option">
                <div className="travel-title">
                  <h3>By Air</h3>
                </div>
                <div className="travel-body">
                  <p>
                    Cornwall Airport Newquay is 5 miles north of Newquay and is
                    served by the ‘Newquay to Padstow’ FirstKernow bus service
                    (Number 56). Car hire is available at the airport from Hertz
                    and Europcar. The next nearest airport is Exeter airport in
                    Devon; an hour and a half drive to Newquay.
                  </p>
                </div>
              </div>
              <div className="travel-option">
                <div className="travel-title">
                  <h3>By Train</h3>
                </div>
                <div className="travel-body">
                  <p>
                    Newquay is on its own branch line, the Par to Newquay
                    Atlantic Coast Line. Par is the connection to the ‘Plymouth
                    to Penzance’ main line and is just outside St Austell, on
                    the Cornish south coast. The railway station is located in
                    the heart of the town on Cliff Road. The train station is
                    seasonally manned and does not have an automated ticket
                    machine so when the ticket office is not open, tickets can
                    be bought either on the train or online.
                  </p>
                </div>
              </div>
              <div className="travel-option">
                <div className="travel-title">
                  <h3>By Coach</h3>
                </div>
                <div className="travel-body">
                  <p>
                    Newquay is part of the National Express network and the main
                    stop is at Newquay Bus Station on Manor Road, just off the
                    town centre and right behind our house. The Megabus coach
                    service has a stop at Newquay bus station but this can only
                    be booked in advance through their website.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
