import React from 'react';
import  { BrowserRouter, Switch, Route ,Link } from 'react-router-dom';

import Api from '../../../api';

import { AreaLogin } from './styled';
import { BtnDefautIcons} from '../../styled';
import  { BtnDefaut } from '../../../components/styled';



export default({onReciveGoogle}) => {

    const actionLoginGoogle = async () => {
      let result = await Api.googleLogar();

      if(result) {

        onReciveGoogle(result.user);

      }else {

          alert('error');
      }
    }

    return(
        <BrowserRouter>
        <Switch>

            <Route exact path='/registrar'>
            <AreaLogin>

            <h1 className='organize'> crie sua conta</h1>
            <p>crie sua conta, é gratis ! </p>
            <form>

            <div class='form-imput'>
                                <label>Nome</label>
                                <input type='text'></input>
                            </div>


                            <div class='form-imput'>
                                <label>E-mail</label>
                                <input type='email'></input>
                            </div>
                            

                            <div class='form-imput'>
                                <label>senha</label>
                                <input type='password'></input>
                            </div>

                            <BtnDefaut>Comece agora !</BtnDefaut>
                            <div className='footerlogin'>
                           Já tem uma conta?  <Link to='/'> Fazer login </Link> 
                                </div>             
                            </form>  
            

            </AreaLogin>
            </Route>
            <Route exact path='*'>
            <AreaLogin>

                        <h1>faça login na sua conta </h1>

                        <BtnDefautIcons>     
                        <div class='center'>fazer login com facebook</div> 
                        </BtnDefautIcons>


                        <BtnDefautIcons onClick={actionLoginGoogle}>     
                        <div class='center'>fazer login com Google
                        </div> 
                        </BtnDefautIcons>

                        <p> ou </p>

                        <form>
                            <div class='form-imput'>
                                <label>E-mail</label>
                                <input type='email'></input>
                            </div>
                            

                            <div class='form-imput'>
                                <label>senha</label>
                                <input type='password'></input>
                            </div>

                            <BtnDefaut>Entrar</BtnDefaut>
                            <div className='footerlogin'>
                            Não tem conta?  <Link to='/registrar'> Registre-se</Link> 
                                </div>             
                            </form>  

                        </AreaLogin>
            </Route>
        </Switch>
              
        </BrowserRouter>
        
    );

    }
