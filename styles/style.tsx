import styled , { createGlobalStyle }from 'styled-components'

export const Global = createGlobalStyle
`
*{
   padding: 0;
   margin: 0;
}
a{
   text-decoration: none;
}
li{
   list-style-type: none;
}
body{
   background: rgb(5,5,5);
}
.sidebar_open_nav{
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   position: fixed;
   backdrop-filter: blur(2px);
}
`

export const NavStyle = styled.header
`
top: 0;
left: 0;
position: sticky;
.sidebar_open_header{
   top: 0;
   left: 0;
   width: 300px;
   height: 100%;
   display: flex;
   position: fixed;
   background: black;
   flex-direction: column;
}
.sidebar_close_header{
   top: 0;
   left: 0;
   width: 100%;
   position: fixed;
   background: black;
}
nav{
   .sidebar_close{
         float: left;
         width: 25px;
         height: 20px;
         display: flex;
         margin: .4rem;
         flex-wrap: wrap;
         :hover{
            >div{
               width: 22px;
               transition: .3s;
               background: rgb(130,130,130);
            }
         }
      div{
         margin: 2px auto;
         width: 25px;
         height: 3px;
         background: white;
      }
   }
   .sidebar_open{
         float: left;
         width: 20px;
         height: 20px;
         margin: .4rem;
         background: white;
         :hover{
            background: rgb(130,130,130);
            animation: rotate-center 0.6s ease-in-out both;
            @keyframes rotate-center {
               0% {
                 transform: rotate(0);
               }
               100% {
                 transform: rotate(360deg);
               }
            }
         }
         clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
            div:nth-child(1){
               display: none;
            }
            div:nth-child(2){
               display: none;
            }
            div:nth-child(3){
               display: none;
            }
}
   .open{
      display: flex;
      align-items: center;
      flex-direction: column;
      >li{
         margin: 25px auto;
         a{
            color: white;
            :hover{
               color: #785FEE;
            }
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
         .active{
            font-size: 20px;
            font-weight: 600;
            color: #652FEE !important;
         }
      }
   }
   .close{
      display: none;
   }
}
@media screen and (min-width: 1024px){

}
@media screen and (min-width: 768px and max-width: 1024px){

}
@media screen and (max-width: 768px){

}
@media screen and (max-width: 420px){
   .sidebar_open_header{
      width: 100% !important;
      background: rgb(0,0,0,0.99);
   }
}
`

export const HomeMain = styled.main
`

`
export const MainAuth = styled.main
`
display: flex;
max-width: 600px;
border-radius: 15px;
flex-direction: column;
min-height: calc(75vh - 8rem);
margin: calc(4rem + 30px) auto;
   >section{ 
      display: flex;
      background: rgb(0,0,0);
      border-radius: 15px;
      flex-direction: column;
      height: calc(75vh - 8rem);
      justify-content: space-between;
      >section{
         margin: 1rem;
         display: flex;
         border-radius: 15px 15px 0 0;
         background: rgb(12,12,12);
         justify-content: flex-end;
         p{
            display: none;
         }
         .active{
            margin: 20px;
            display: block;
            transition .5s;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            padding: 5px 15px;
            background: white;
            border-radius: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            :hover{
               color: #bf0000;
               padding: 5px 25px;
               background: rgb(220,220,220);
            }
         }
      }
      .form{
            padding: 1rem;
            display: flex;
            min-height: 250px;
            background: rgb(12,12,12);
            align-items: center;
            flex-direction: column;
            border-radius: 0 0 15px 15px;
            justify-content: space-evenly;
         >input{
            width: 180px;
            border: none;
            outline: none;
            margin-top: 1rem;
            padding: 7px 15px;
            background: white;
            border-radius: 20px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
         >button{ 
            color: black;
            margin: 1rem;
            border: none;
            outline: none;
            transition: .5s;
            font-size: 20px;
            padding: 5px 25px;
            background: white;
            border-radius: 50px;
            :hover{
               color: #bf2222;
               background: rgb(200,200,200);
            }
         }
         p:nth-child(1){
            color: white;
            font-size: 20px;
            font-weight: 600;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
         p:nth-child(2){
            color: white;
            font-size: 12px;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
         }
      }
   }
`

export const FooterStyle = styled.footer
`
width: 100%;
height: 300px;
margin-top: 4rem;
background: black;
`