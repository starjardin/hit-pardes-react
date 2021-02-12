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
export const Lyrics = styled.div``
export const SongTitle = styled.h2``
export const SongArtist = styled.p``
export const Image = styled.img`
  cursor: pointer;
`