import React from 'react';
import Header from '../../components/general/Header.js';

import BuildingMap from '../../components/datavis/BuildingMap.js';
import '../../styles/BuildingMap.css';
// import Footer from '../components/general/Footer.js';

const NYCBuildingMapPage = () => {
    return (
        <div className="page-container">
        <Header />
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BuildingMap />
        </div>
        <br /><br />
        </div>
    );
};

export default NYCBuildingMapPage;

