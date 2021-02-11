import React from 'react'

import { Container, Form, Input, Option, SubmitButton, Select } from './styles/addSongsStyles'

const AddSongs = ({children, ...restProps}) => {
  return (
    <Container { ...restProps }>{ children }</Container>
  )
}

AddSongs.Form = function AddSongsForm ({ children, ...restProps }) {
  return <Form { ...restProps }>{ children }</Form>
}

AddSongs.Input = function AddSongsInput ({ children, ...restProps }) {
  return <Input { ...restProps }>{ children }</Input>
}

AddSongs.Option = function AddSongsOption ({ children, ...restProps }) {
  return <Option { ...restProps }>{ children }</Option>
}

AddSongs.SubmitButton = function AddSongsSubmitButton ({ children, ...restProps }) {
  return <SubmitButton { ...restProps }>{ children }</SubmitButton>
}

AddSongs.Select = function AddSongsSelect ({ children, ...restProps }) {
  return <Select { ...restProps }>{ children }</Select>
}

export default AddSongs