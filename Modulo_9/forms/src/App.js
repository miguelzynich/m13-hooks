import React, { useState } from 'react';
import FormAccount from './Components/FormAccount/FormAccount';
import FormProduct from './Components/FormProduct/FormProduct';
import './App.css';
import { useValidation } from './Components/Hooks/useValidation';
import Validation from './Components/Validation/Validation';
import DataResult from './Components/DataResult/DataResult';

function App() {
  const [isAccEmpty, setIsAccEmpty] = useState(false);
  const [isProdEmpty, setIsProdEmpty] = useState(false);
  const [isEqual, setIsEqual] = useState(true);
  const [validateCPF, setValidateCPF] = useState('');
  const [isCpfValid, setIsCpfValid] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState(0);

  return (
    <div className="App">
      <h1>Formulários</h1>
      <div id='content'>
        <div id='forms'>
          <div id='form-account'>
            <FormAccount setIsAccEmpty={setIsAccEmpty} setIsEqual={setIsEqual} setUserData={setUserData} userData={userData} setUserId={setUserId} userId={userId} />
            <Validation>
              <p>{useValidation(isAccEmpty, "empty")}</p>
              <p>{useValidation(isEqual, "equal")}</p>
            </Validation>
          </div>
          <div id='form-product'>
            <FormProduct setIsProdEmpty={setIsProdEmpty} validateCPF={validateCPF} setValidateCPF={setValidateCPF} setIsCpfValid={setIsCpfValid} setUserData={setUserData} userData={userData} setUserId={setUserId} userId={userId} />
            <Validation>
              <p>{useValidation(isProdEmpty, "empty")}</p>
              <p>{useValidation(isCpfValid, "cpf")}</p>
            </Validation>
          </div>
        </div>
        <div id='results'>
          <DataResult userData={userData} setUserData={setUserData} />
        </div>
      </div>
    </div>
  );
}

export default App;
