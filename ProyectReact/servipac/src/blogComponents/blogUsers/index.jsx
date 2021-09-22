import React,{useEffect, useState} from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from '../../components/ButtonElements'
import { UsersContainer, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './UsersElements'
import db from '../../firebaseconfig'


const UsersBlog = () => {
    const [blogs,setBlogs]=useState([{name: "loading...",id:"initial"}])
    useEffect(()=>
      
       onSnapshot(collection(db,"users"),(snapshot)=>{
        setBlogs(snapshot.docs.map((doc)=>({...doc.data(),id: doc.id})))
       }),[]

    )
    return (
      <UsersContainer>

        
              <ul>{blogs.map((blog => 
                 <InfoContainer lightBg={blog.lightBg} id={blog.id}>
        <InfoWrapper>
          <InfoRow imgStart={blog.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{blog.topLine}</TopLine>
                <Heading lightText={blog.lightText}>{blog.headline}</Heading>
                <Subtitle darkText={blog.darkText}>{blog.description}</Subtitle>
                <BtnWrap>
                  
                  <Button to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={blog.primary ? 1 : 0}
                  dark={blog.dark ? 1 : 0}
                  dark2={blog.dark2 ? 1 : 0}
                  >{blog.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={blog.img} alt={blog.alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
                ))}
                </ul>
             
            
            
            
      </UsersContainer>
    )
}

export default UsersBlog
