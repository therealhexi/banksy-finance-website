import React from 'react'
import missionTitleImg from '../../image/mission/missionTitleImg.png'
import missionBG from '../../image/mission/missionBG.png'
import dotsBG from '../../image/dots.png'
import missionRing from '../../image/mission/mission-ring.png'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 760px;
  background: url(${dotsBG}) no-repeat;
  background-size: 60% 60%;
  background-position: top 50% left 20%;
  
  @media screen and (max-width: 1100px) {
    height: 600px;
    background-size: 60%;
    background-position: top 50% left 20%;
  }
`

const MissionContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  background-size: 100% 100%;
  position: relative;
  padding-top: 24vh;

  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 400px;
    padding-top: 0;
  }
`

const Title = styled.div`
  position: absolute;
  top: 280px;
  img {
    position: absolute;
    top: -160px;
    width: 80px;
  }

  p {
    position: absolute;
    top: -60px;
    left: 39px;
    font-size: 64px;
    color: #fff;
    font-weight: 600;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 10vh;
    left: 0;
    margin: 0 0;
    width: 20vw;
    height: 24vw;

    p {
      font-size: 28px;
      position: absolute;
      top: 10vw;
      left: 5vw;
    }

    img {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 9vw;
    }
  }
`

const Content = styled.div`
  position: absolute;
  width: 520px;
  font-size: 18px;
  line-height: 32px;
  color: #B2B2B2;
  top: 340px;

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 100%;
    left: 0;
    top: 15vh;
    margin: 0 auto;
    line-height: normal;
    font-size: 16px;
  }
`

const Spin = keyframes`
  to {
    transform: rotate(-1turn);
  }
`

const SpinningImage = styled.img`
  width: 600px;
  background-size: 100% 100%;
  position: absolute;
  top: 60px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  // animation: ${Spin} 30s infinite linear !important;

  @media screen and (max-width: 1100px) {
    top: 330px;
    left: 0;
    width: 250px;
    margin-left: calc((100% - 250px) / 2);
    animation: none !important;
  }
`

const RingImage = styled.img`
  height: 600px;
  transform: rotate(-6deg);
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 5;

  @media screen and (max-width: 1100px) {
    height: 400px;
    transform: rotate(-6deg);
    position: absolute;
    top: 300px;
    right: 0;
    z-index: 5;
  }
`

const Mission: React.FC = () => {
  return (
    <div className="section">
      <Wrapper>
        <MissionContainer id="MissionContainer">
          <Title data-aos="fade-in">
            <p >MISSION</p>
            <img src={missionTitleImg} alt="mission"  />
          </Title>

          <Content  data-aos="fade-in">
            Provide a safe and reliable lending environment for NFT holders, fully release the financial value of NFT, and improve the NFT market infrastructure.
          </Content>

          <SpinningImage src={missionBG}  data-aos="fade-in" />

          <RingImage src={missionRing} />
        </MissionContainer>
      </Wrapper>
    </div>
  )
}

export default Mission
