import styled from 'styled-components'

export const HomeBg = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const HomeBox = styled.div`
  display: flex;
`
export const BannerAndVideosBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  width: 85vw;
`
export const BannerBox1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const WebsiteLogo = styled.img`
  height: 60px;
  width: 160px;
`
export const BannerBox2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Description = styled.h1`
  font-family: Roboto;
  font-size: 25px;
`
export const GetitnowButton = styled.button`
  padding: 5px;
  border: black 1px solid;
  background-color: transparent;
  width: 100px;
`
export const VideosContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: ${props => (props.Dark ? '#000000' : '#ffffff')};
  overflow: scroll;
  height: 90vh;
`
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 40px;
  width: 350px;
  border: ${props => (props.Dark ? '#ffffff' : '#000000')} solid 1px;
`
export const SearchBar = styled.input`
  height: 38px;
  width: 300px;
`
export const SearchIConCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 49px;
  background-color: ${props => (props.Dark ? '#ffffff' : '#000000')};
  color: ${props => (props.Dark ? '#000000' : '#ffffff')};
`
export const VideoCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  background-size: cover;
  padding: 20px;
`
export const LoaderCont = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`

export const FailureView = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`
export const FailureImg = styled.img`
  height: 50vh;
  width: 100%;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 60px;
  border: 0px;
  border-radius: 5px;
  color: purple;
`
export const EmptyListView = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`
export const EmptyListImg = styled.img`
  height: 80vh;
  width: 100%;
`
export const EmptyListRetryButton = styled.button`
  height: 40px;
  width: 60px;
  border: 0px;
`
