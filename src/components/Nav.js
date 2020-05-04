import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={[
        'where-and-when',
        'RSVP',
        'venue',
        'travel',
        'accommodation',
        'more-info',
      ]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="where-and-when">
          <a href="#">Where and when</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="RSVP">
          <a href="#">RSVP</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="venue">
          <a href="#">Venue</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="travel">
          <a href="#">Travel</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="accommodation">
          <a href="#">Accommodation</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="more-info">
          <a href="#">More info</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
