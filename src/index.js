import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

function printPage(e){
  window.print();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PrintProvider>
      <NoPrint>
        <Print>
          <App />
        </Print>
        <button onClick={printPage}>A Button</button>
      </NoPrint>
    </PrintProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
