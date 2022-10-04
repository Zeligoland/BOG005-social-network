import {onNavigate} from '../src/main.js';

jest.mock('../src/lib/utils.js')

describe('OnNavigate es una función', () => {
  test ("Deberia ser una funcion",()=>{
    expect(typeof onNavigate).toBe('function');
  })  
})

 const mockTemplateLogin = () => {
   const loginContainer = document.createElement('div');
   loginContainer.innerHTML = '<h1>Mock Template Login</h1>'
   return loginContainer
 }

 const mockTemplateRegister = () => {
   const registerContainer = document.createElement('div');
   registerContainer.innerHTML = '<h1>Mock Template register 1</h1>'
   return registerContainer
 }

 const mockRoutes = {
   '/login': mockTemplateLogin(),
   '/register': mockTemplateRegister(),
 }

describe('onNavigate', () => {
   it ('test de onNavigate', () => {
   document.body.innerHTML = '<div id="root"></div>'
    onNavigate('/login', mockRoutes)
     console.log('contenido: ', document.getElementById('root').textContent);
     expect(document.getElementById('root').textContent).toEqual('Mock Template Login 1')
   })

  it('test de onNavigate', () => {
    document.body.innerHTML = '<div id="root"></div>'
    onNavigate('/register', mockRoutes)
    console.log('contenido: ', document.getElementById('root').textContent);
    expect(document.getElementById('root').textContent.trim()).toEqual('Mock Template register 1')
  })
  });