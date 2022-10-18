import {onNavigate} from '../src/main.js';

jest.mock('../src/lib/utils.js')

const mockTemplateLogin = () => {
   const loginContainer = document.createElement('div');
   loginContainer.innerHTML = '<h1>Mock Template Login</h1>'
   return loginContainer
 } 

 const mockTemplateRegister = () => {
   const registerContainer = document.createElement('div');
   registerContainer.innerHTML = '<h1>Mock Template register</h1>';
   return registerContainer;
 };

  const mockRoutes = {
   '/login': mockTemplateLogin,
   '/register': mockTemplateRegister,
 }

describe('onNavigate', () => {
   it ('test de onNavigate para Login', () => {

   document.body.innerHTML = '<div id="root"></div>'
    onNavigate('/login', mockRoutes)
     console.log('contenido: ', document.getElementById('root').textContent);
     expect(document.getElementById('root').textContent).toEqual('Mock Template Login')
   })

   it('test de onNavigate para Register', () => {
    document.body.innerHTML = '<div id="root"></div>'
    onNavigate('/register', mockRoutes)
    console.log('contenido: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent.trim()).toEqual('Mock Template register')
  })
  });

  //const mockTemplateWall = () => {
   // const 
  //}

  //describe ('')

// import { signInUser } from "../src/lib/auth.js";

//describe('Arroja error para correo invalido', () => {
  //  let invalidEmail = "123@nada.es";
   // let expectedResult = "Correo invalido, revise la información suministrada"
    //let realResult = signInUser(invalidEmail);

   // expect(realResult).toBe(expectedResult);*/
