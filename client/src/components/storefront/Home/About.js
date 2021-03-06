import React from 'react';
import styled from 'styled-components';
import about from "./library.jpg";

const Container = styled.section`
  background: #FCDEC0 ;
  padding: 100px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-box {
      display: flex;
      overflow: hidden;
      justify-content: center;
      margin-bottom: 80px;

      img {
        width: 80vw;
      }
    }

    .heading {
      text-align: center;
      padding: 0 20px;

      > h1 {
        font-weight: 200;
        font-size: 40px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 100px 30px;

    > div {
      flex-direction: column-reverse;

      .image-box {
        margin-bottom: 0;
      }

      .heading {
        margin-bottom: 80px;

        > h1 {
          font-size: 28px;
        }
      }
    }
  }
`;

const About = () => {
  return (
    <Container id="about">
      <div>
        <div className="image-box">
          <img
            src={about}
            alt="library"
          />
        </div>
        <div className="heading">
          <h1>The Story of Cham Store</h1>
          <p>
          Cham Store is a well-renowned online store that has continually featured a variety of
            high-quality and affordable products since day one.
          </p>
          <br />
          <p>
          Our passion for excellence has driven us from the beginning, and continues to drive us
            into the future. The team at Cham Store knows that every product counts, and strives
            to make the entire shopping experience as rewarding and fun as possible. Check out our
            store and special
          </p>
          <p>offers, and get in touch with questions or requests.</p>
        </div>
      </div>
    </Container>
  );
};
export default About;
