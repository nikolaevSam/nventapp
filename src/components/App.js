import '../index.css';
import '../utils/utils';
import { ehtCircuits } from '../utils/utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function App() {
  const [reportData, isReportDataShow] = useState(false);
  const [circuitData, setCircuitData] = useState({});

  useEffect(() => setCircuitData({
    zone: 'Введите номер цепи.',
    tag: '...',
    cableType: '...',
    length: '...',
    operatingLoad: '...',
    startUpCurrent: '...',
    operatingCurrent: '...'
  }), [])

  function handlerFindCircuit(updatedCircuit) {
    const currentCircuit = ehtCircuits.find((circuit) => {
      return circuit.id === updatedCircuit;
    });
    if (currentCircuit === undefined) {
      return setCircuitData({
        zone: 'Такого номера нет в базе!',
        tag: '...',
        cableType: '...',
        length: '...',
        operatingLoad: '...',
        startUpCurrent: '...',
        operatingCurrent: '...'
      });
    } return setCircuitData(currentCircuit);
  };

  function handlerShowData() {
    reportData ?
      isReportDataShow(false) :
      isReportDataShow(true);
  };

  return (
    <div className='page'>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Helmet>
      <Header />
      <Main
        isOpen={reportData}
        onSubmit={handlerFindCircuit}
        handlerOpen={handlerShowData}
        circuit={circuitData} />
      <Footer />
    </div>
  );
}
