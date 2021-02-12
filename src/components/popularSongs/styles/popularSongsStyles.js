import styled from "styled-components";

export const Container = styled.ul`
  padding: 0;
  margin : .5rem;
`
export const Item = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  column-gap: 1rem;
  background-color: #272343;
  padding-inline: 2rem;
  padding-block: 2rem;
  list-style: none;
  color: #ffffff;
  margin: 1rem;
`
export const Column = styled.div`
  display : ${({ display }) => (display)};
  padding-inline : 1rem;
`
export const Favourite = styled.div`
  cursor: pointer;
`
export const Button = styled.button`
  cursor: pointer;
`
export const Cart = styled.div`
  padding : .5rem;
`
export const Lyrics = styled.div`
  * {
    color: #fff;
  }
`
export const SongTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
`
export const SongArtist = styled.h4`
  font-size: 16px;
  font-weight: normal;
`
export const Image = styled.img`
  cursor: pointer;
`