import React from 'react';
import './Sidebar.scss';
import Calendar from '../../assets/images/calendar.svg';
import Stack from "../../assets/images/stack.svg";
import Person from "../../assets/images/person.svg";
import Info from "../../assets/images/info.svg";
import Speed from "../../assets/images/speed.svg";
import Trophy from "../../assets/images/trophy.svg";


const Sidebar = () => {
  return (
    <section className='sidebar'>

<div className="sidebar__grade sidebar__card"><span className="sidebar__header">Grade <img src={Info}/></span>
<p className="p__gold"><img className="img__Trophy1"src={Trophy} />GOLD</p>
</div>
      <div className="sidebar__overall-score sidebar__card"><span className="sidebar__header">Overall Score <img src={Info}/></span>
      <p className="p__overall-score">100%</p></div>
      <div className="sidebar__last-refreshed"><span className="sidebar__header">Last Refreshed</span>
      <p className="p__last-refreshed">Nov 14, 2023</p></div>
      
      <h4 className="h4__details"><img src={Stack}/> Details</h4>

      <div className='sidebar__details'>
      <div className="div__flex"><span>Data quality score <img src=""/></span><span className="span__beta">beta</span></div>
     <p><img className="img__Trophy2" src={Trophy}/>Gold</p>
     <span>Data last refreshed <img src=""/></span>
     <span>Refresh schedule <img src=""/></span>
     <p>Daily</p>
     <span>Data type <img src=""/></span>
     <p>Table</p>
     <span>Topics <img src=""/></span>
     <p>City government, Community services</p>
     <span>More information <img src=""/></span>
     <p>External links</p>
     <span>License <img src=""/></span>
     <p>Open Government <br></br>License - Toronto</p>
      </div>

      

      <h4 className="h4__details"><img src={Person}/> Publisher</h4>
      <div className='sidebar__publisher'>
      <span>Published by <img src=""/></span>
      <p>Shelter, Support & <br></br>Housing Administration</p>
     <span>Contact <img src=""/></span>
     <p>sshadata@toronto.ca</p>
    
      </div>

      




  

    
     

    </section>
  );
};

export default Sidebar;
