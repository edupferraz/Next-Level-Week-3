import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

import '../styles/components/sidebar.css';

export default function Sidebar(){
    
    return(
        <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>

          <Link to="/app" className="enter-app">
            <FiArrowLeft size={24} color="#FFF" /> 
          </Link>

        </footer>
      </aside>
    );
}