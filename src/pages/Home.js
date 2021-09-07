import {React} from 'react';
import Hero from '../components/Hero';
import { SliderData } from '../components/SliderData';
import './Home.css'


function Home() {
 return (
     <div>
               <Hero slides ={SliderData}/>    
     </div>
 );

}
export default Home;

