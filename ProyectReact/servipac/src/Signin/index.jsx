import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text, Icons } from './SigninElements'
import Iconss from '../images/logoser.svg'
// import { auth } from '../firebaseconfig'
const SignIn = () => {
  const[email,setEmail] = useState('')
  const[pass,setPass] = useState('')

  const RegistrarUsuario = (e)=>{
    e.preventDefault()
    try{
      // auth.createUserWithEmailAndPassword(email,pass)
      alert("Usuario logeado")
    }catch (e){
      console.log(e)
    }
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><Icons src={Iconss} /></Icon>
          <FormContent>
            <Form onSubmit={RegistrarUsuario} >
              <FormH1>Iniciar sesión en su cuenta</FormH1>
              <FormLabel htmlFor='for'>Correo</FormLabel>
                <FormInput 
                onChange={(e)=>{setEmail(e.target.value)}}
                htmlFor='email' required 
                 />
              <FormLabel htmlFor='for'>Contraseña</FormLabel>
                <FormInput 
                onChange={(e)=>{setPass(e.target.value)}}
                htmlFor='password' required />
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
