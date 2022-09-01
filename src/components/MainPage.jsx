import React from 'react'
import Contrat from './Contrat';
import Conducteur from './Conducteur';
import SousContrat from './SousContrat';
import Vehicules from './vehicules';
import Navbar from './Navbar';


import { useState } from 'react'
import "semantic-ui-css/components/button.min.css";
import "semantic-ui-css/components/menu.min.css";

const MainPage = () => {
    const [active, setActive] =useState('Contrat')
  return (
    <div>
    <Navbar/> 

 <div className="mt-20"> 
    <div class="ui buttons">
       <button className={active === 'Contrat' && 'ui button blue' || active !== 'Contrat' && 'ui button'} onClick={() => setActive('Contrat')}>Contrat</button>
       <button className={active === 'SousContrat' && 'ui button blue' || active !== 'Sous-Contrat' && 'ui button'} onClick={() => setActive('SousContrat')}>Sous-Contrat</button>
       <button className={active === 'Conducteur' && 'ui button blue' || active !== 'Conducteur' && 'ui button'} onClick={() => setActive('Conducteur')}>Conducteur</button>
       <button className={active === 'Vehicules' && 'ui button blue' || active !== 'Vehicules' && 'ui button'} onClick={() => setActive('Vehicules')}>Vehicules</button>
     </div>
    </div>
     <div className="absolute inset-x-0 bottom-0 w-full test p-5"> 
   {active === 'Contrat' && <Contrat/>}
   {active === 'SousContrat' && <SousContrat/>}
   {active === 'Conducteur' && <Conducteur/>}
   {active === 'Vehicules' && <Vehicules/>}
     </div>
     
     </div>
     
  )
}

export default MainPage