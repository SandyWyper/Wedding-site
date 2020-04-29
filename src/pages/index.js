import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/all-smart.png'
import pic02 from '../assets/images/[S+J].png'
import pic03 from '../assets/images/US2.png'
import pic04 from '../assets/images/smootchin.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

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

  render() {
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
                  <h2>Saturday 5th June 2021</h2>
                </header>
                <p>
                  We ask all guests to arrive at 1.30pm; the ceremony will start
                  at 2.00pm.
                </p>
                <p>
                  The wedding ceremony and reception will take place at
                  Bedruthan Steps camping field, just outside the village of
                  Mawgan Porth, near Newquay, Cornwall. This is a gently sloping
                  grass field with a gravel path alongside. There is access to
                  Bedruthan Steps beach from the field via 100 metres of the
                  coast path and 149 steep steps (steps may be closed if there
                  has been recent rockfall). The postcode for this location is
                  PL27 7UW and it is situated on the B3276 Newquay-Padstow coast
                  road. When approaching from Newquay, it is the next left after
                  the National Trust Carnewas shop and café.
                </p>
                <p>
                  There is free parking onsite at the venue. The site is not
                  serviced by local public transport so you will need to either
                  drive or take a taxi to the venue. We will be providing
                  transport back to Newquay throughout the evening from 7pm.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={pic01} alt="Jenny and Sandy" />
              </span>
            </div>
          </section>

          <section id="travel" className="main special">
            <header className="major">
              <h2>Travel</h2>
            </header>
            <p className="text-left">
              Newquay is where we live and the travel hub for this part of
              Cornwall. There is the biggest selection of accommodation in
              Newquay, but the areas of Watergate Bay and Mawgan Porth also have
              accommodation and will be closer to the wedding venue but have
              less in the way of amenities. If you need any help whilst booking
              travel or accommodation, we are happy to give you advice.
            </p>

            <div>
              <div className="travel-option">
                <div className="travel-title">
                  <h3>By Air</h3>
                  {/* <span className="travel-icon icon fa-plane"></span> */}
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
                  <h3>By Car</h3>
                  {/* <span className="travel-icon icon fa-plane"></span> */}
                </div>
                <div className="travel-body">
                  <p>
                    The main motorway to Cornwall is the M5 serving Exeter,
                    Bristol and all points North whilst from London the choice
                    is the mainly dual carriageway A303/A30 or the M4/M5 via
                    Bristol. From Exeter follow the A30 to Cornwall and Newquay
                    is fully signposted from the A30.
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
                    the Cornish south coast. The Plymouth to Penzance mainline
                    then connects country wide. In the summer, normally from the
                    end of May to the end of September, Newquay has direct
                    trains from London, Bristol, Birmingham, Yorkshire, the
                    North East and Scotland. Great value fares can be found if
                    you book in advance, the earlier you book the more you save.
                    The railway station is located in the heart of the town on
                    Cliff Road. The train station is seasonally manned and does
                    not have an automated ticket machine so when the ticket
                    office is not open, tickets can be bought either on the
                    train or online.
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
                    town centre and right behind our house. There is a secondary
                    stop at Porth Four Turns on Henver Road but this is for
                    passengers with hand luggage only as the vehicle cannot stop
                    long enough to open its main luggage compartment. The
                    Megabus coach service has a stop at Newquay bus station but
                    this can only be booked in advance through their website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="accommodation" className="main special">
            <header className="major">
              <h2>Accommodation</h2>
              {/* <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p> */}
            </header>
            <p className="content">
              There will be free camping available onsite for tents or campers
              with toilets and showers available for your use. Camping is
              available from Thursday to Monday but be aware that there will be
              people around to set up/take down the wedding teepees and other
              equipment on the days surrounding the wedding. If you would like
              to camp and would like help sourcing a tent and other camping
              gear, we will see what we can do for you. Alternatively, there is
              a huge amount of accommodation available in the local area. We
              have attached links to help you find accommodation suited to your
              needs and budget. If you are unsure of the location, just get in
              touch to ask us.
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
                  Premier Inn
                </a>
              </li>
            </ul>
            <p className="w-80">
              *Please note that the Premier Inn in Quintrell Downs is a 10-15
              minute drive from Newquay centre and not en route for transport
              back to Newquay on the evening of the wedding
            </p>
          </section>

          <section id="RSVP" className="main special">
            <header className="major">
              <h2>RSVP</h2>
            </header>
            <form
              method="post"
              name="RSVP"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" value="RSVP" />
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
              {this.state.attending === "Some can't make it" && (
                <div className="field">
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
              )}

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
              <div className="field-check">
                <label htmlFor="camping">
                  Will you be camping on site? There's loads of room, and you
                  can change your mind nearer the time, but we'd like to get a
                  feel for how many campers will be joining us.
                </label>
                <input
                  type="checkbox"
                  name="camping"
                  id="camping"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></input>
              </div>

              <div className="field half">
                <label htmlFor="email">
                  Incase we need to get in touch with any of you nearer the
                  time. Please leave your eamil address.
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
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

          <section id="more-info" className="main">
            <header className="major">
              <h2>More info</h2>
            </header>
            <h3>Dresscode</h3>
            <p>
              It is a wedding so worth dressing up for but we are happy for you
              to wear whatever is comfortable. Kilts welcome! Due to the nature
              of the site, we strongly recommend flat shoes only for your own
              comfort and safety. The wedding and reception will be held inside
              giant tepees which will be adequately warm, however, there is lots
              of outdoor space to enjoy and it may get quite cool in the evening
              so we recommend taking a warm coat with you. Bedruthan Steps has
              been officially accredited with Dark Sky Discovery Status, which
              means that it is away from the worst of any local light pollution
              and provides excellent stargazing conditions so make sure you are
              warm enough to enjoy it should the skies be clear enough. If you
              are local and able to, we encourage you to bring along a blanket
              or two so we can all keep cosy having a drink around the open
              fire.
            </p>
            <h3>Drinks</h3>
            <p>
              We will be providing a free bar of wine, beer, cider and soft
              drinks for you to enjoy throughout the day and evening. For the
              evening reception, if you would like to bring any spirits along
              with you to contribute to the bar, we will provide the mixers,
              fruit, ice, etc. You will not need to pay for drinks so no need to
              worry about bringing cash.
            </p>
            <h3>Children</h3>
            <p>
              Your children are more than welcome on the day. There will be a
              kids’ play tent available where kids can play together and make
              friends. Maybe bring a toy along to play with so mum and dad can
              enjoy a prosecco or five!
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
