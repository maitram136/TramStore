import React from 'react';
import styled from 'styled-components';
import imgbox from './imgbox.jpg';

const Container = styled.section`
  height: calc(100vh - 67px);
  display: flex;
  background-color: #FCDEC0;

  > div {
    flex: 1;
  }

  > .heading {
    position: relative;

    > div {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h2 {
        color: #B4846C ;
        font-size: 50px;
        font-weight: 400;
      }

      p {
        font-size: 20px;
      }
    }
  }

  .img-box {
    overflow: hidden;

    > div {
      background: url(${({ img }) => img});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 100%;
      transition: transform 0.5s;
    }

    &:hover {
      > div {
        transform: scale(1.2);
      }
    }
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 600px;

    .heading > div > h2 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    .heading > div {
      > h2 {
        font-size: 30px;
      }
    }
  }
`;

const BackgroundImage = () => {
  return (
    <Container img={imgbox}>
      <div className="heading">
        <div>
        <h2>One of a Kind Items</h2>
          <p>Easy, Fun Shopping</p>
        </div>
      </div>
      <div className="img-box">
        <div></div>
      </div>
    </Container>
  );
};

export default BackgroundImage;
