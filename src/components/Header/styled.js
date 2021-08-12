import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image:linear-gradient(to right,#000,#791e94);
    color:white;
    .conteiner{
        padding:10px 20px;
        display:flex;
        align-items:center


    }
    .logo{
        flex:1;

    }
    nav{

    }
    ul{
        display:flex;


    }

    li{
        padding:5px;
        list-style:none;
        margin-left:5px;
        a{
            text-decoration:none;
            color:white;

            &:hover{
            color:#000;
                            }
       
                                  }

    }
    


`;