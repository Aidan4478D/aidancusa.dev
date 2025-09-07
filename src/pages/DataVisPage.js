import React from 'react';
import Header from '../components/general/Header.js'
// import Footer from '../components/general/Footer.js'

import TurkeyClock from '../components/datavis/TurkeyClock.js'

const DataVisPage = () => {
    return (
        <div className="page-container">
            <Header />
            <br/> <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}> <TurkeyClock /> </div>
            <br/> <br/>
        </div>
    );
}

export default DataVisPage;
