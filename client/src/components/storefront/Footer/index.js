import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from 'antd';
import FbIcon from './fb.png';
import TwiterIcon from './twiter.png';
import InIcon from './in.png';
import PaypalIcon from './paypal.svg';
import footerImg from './footer.jpg'

const Container = styled.section`
  background-image: url(${({ img }) => img});
  padding: 50px 0 30px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  > div {
    padding: 0 15px;

    > * {
      a {
        color: rgba(0, 0, 0, 0.65);

        :hover {
          color: #B4846C ;
        }
      }

      margin-bottom: 15px;

      i {
        margin-right: 10px;
      }
    }

    > *:first-child {
      margin-bottom: 25px;
      text-transform: uppercase;
    }

    .socials {
      margin-bottom: 20px;

      > a:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container img={footerImg}>
      <div>
      <h3>Your Account</h3>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/dashboard/login">My Account</Link>
        </div>
        <div>
          <Link to="/register">New Account</Link>
        </div>
        <div>
          <Link to="/shop">Look Book</Link>
        </div>
      </div>
      <div>
        <h3>Our Company</h3>
        <div>
          <Link to="/">About Us</Link>
        </div>
        <div>
          <Link to="/">Contact Us</Link>
        </div>
        <div>
          <Link to="/">Portfolio</Link>
        </div>
        <div>
          <Link to="/">FAQs</Link>
        </div>
      </div>
      <div>
        <div>
          <NavLink to="/" className="logo">
            <h3>CHAM STORE</h3>
          </NavLink>
        </div>
        <div>
          <Icon type="shop" /> 99 Ho Dac Di, Hue City
        </div>
        <div>
          <Icon type="phone" /> Call Us: 0379587506
        </div>
        <div>
          <Icon type="mail" /> Email: mai.tram@mevry.com
        </div>
      </div>
      <div>
        <div className="socials">
          <a href="https://www.facebook.com/mai.tram.127648">
            <img src={FbIcon} alt="facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src={TwiterIcon} alt="twiter" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={InIcon} alt="linkedin" />
          </a>
        </div>
        <div>
          <a href="https://www.paypal.com/">
            <img style={{ maxWidth: '100px' }} src={PaypalIcon} alt="paypal" />
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
