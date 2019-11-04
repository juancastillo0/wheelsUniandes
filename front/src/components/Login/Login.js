import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

function Login(props) {

  const backUrl = "http://localhost:3001";

  const [correo, setCorreo] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(correo);
    console.log(pw);
  }

  const iniciarSesion = (e) => {
    (async () => {
      e.preventDefault();
      const data = {
        uid: correo,
        password: pw
      };
      const req = await fetch(`${backUrl}/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      const rta = await req.json();
      console.log(props);
      
      props.funcionCookie(rta.token, correo);
    })();
  };

  return (
    true ?
      <div className="App">
        <div className="container heading">
          <h2>Inicio sesión</h2>
          <div className="heading">
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-3"></div>
              <div className="col-sm-8 col-md-8 col-lg-6">
                <form className="form" onSubmit={iniciarSesion}>
                  <div className="form-group">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" className="form-control" id="correo" onChange={e => setCorreo(e.target.value)} placeholder="Ingresa tu correo" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pw">Contraseña</label>
                    <input type="password" className="form-control" id="pw" onChange={e => setPw(e.target.value)} placeholder="Contraseña" />
                  </div>
                  <button type="submit" className="btn yellow-black">Inicia sesión</button>
                </form>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-3"></div>
            </div>

          </div>
        </div>
      </div>
      :
      <div></div>
  );
}

export default Login;