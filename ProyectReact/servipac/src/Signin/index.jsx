import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text, Icons } from './SigninElements'
import Iconss from '../images/logoser.svg'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><Icons src={Iconss} /></Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Iniciar sesión en su cuenta</FormH1>
              <FormLabel htmlFor='for'>Correo</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continuar</FormButton>
              <Text>Se te olvidó tu contraseña</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
