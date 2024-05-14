import style from './stylejs/AppStyle';
import './css/App.css';
import { ButtonBlue, ButtonRed } from './StyledComponents/StyledComponent';

function App() {
  return (
    <>
      <div className='backgroundColorGray'>
        <div style={style.main}>
          <div style={style.innerDiv}>
            <h1 style={style.header} id='fontColorRed'>Login</h1>
            <form action="#" style={{ padding: 10 }}>
              <div style={style.formDiv}>
                <input type="text" placeholder="Email" style={style.input} />
              </div>
              <div style={style.formDiv}>
                <input type="password" placeholder="Password" style={style.input} />
              </div>
              <div style={style.formDiv}>
                <ButtonBlue>Login</ButtonBlue>
              </div>
              <div style={style.formDiv}>
                <ButtonRed>Signup</ButtonRed>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
