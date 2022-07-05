import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg' />
      </Background>

      <ImageTitle>
          <img src='https://pbs.twimg.com/media/EJNgi7cXYAExhC1.png' />
      </ImageTitle>

      <Controls>

        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>

      <SubTitle>
       loremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoa
      </SubTitle>
      <Description>
       loremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwddomoaloremiiwddomoaloremiiwdodomoaloremiiwdodomoaloremiiwdodomoaloremiiwdoodomoaloremiiwdodomoaloremiiwdo moaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoaloremiiwdomoa
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 50px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Controls =  styled.div`
  display: flex;
  align-items: center;
`

const PlayButton   = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 24.2px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
  color:  rgb(249, 249, 249);
  background: rgba(0,0,0, 0.3);

  &:hover{
    background: rgba(0,0,0, 0.6);
  }
`


const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0,0,0, 0.6);
  color: white;
  margin-right: 24.2px;

  span{
    font-size: 30px;
  }
`
const GroupWatchButton = styled(AddButton)`
  
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

`
const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20x;
  margin-top: 16px;
  max-width: 700px;
`