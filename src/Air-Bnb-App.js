import my_pic from './images/temp.jpg'

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Card from "./components/Card";
import DataSource from './components/DataSource';

export default function Airbnb_App() { 
    const cards = DataSource.map((card)=>{
        return (<Card 
        key={card.id}
        {...card}
        />
        )
    })


    return(
        <div>
    <NavBar/>
    <Main/>

    <div id='cards'>
    {cards}
    </div>
        
        </div>

    )
 }