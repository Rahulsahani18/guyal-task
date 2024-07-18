import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="container">
          <h3><b>Back to your digital life</b></h3>
          <span>Choose one of the option to go</span>
          <br/>
          <input className="InptBox1" type="text" placeholder="Email"/>
          <input className="InptBox2" type="text" placeholder="Password"/>
          <hr style={{marginTop:"20px", width:"15rem"}} />
          <span>Or continue with</span>
          <br/>
          <button className="btn1"><i className="fa-brands fa-google" style={{fontSize:"20px"}}></i></button>
          <button className="btn1"><i className="fa-brands fa-meta" style={{fontSize:"20px"}}></i></button>
          <button className="btn1"><i className="fa-brands fa-apple" style={{fontSize:"25px"}}></i></button>
          <button className="btnlogin">Login</button>
        </div>
      </div>
    </>
  );
}

export default App;
