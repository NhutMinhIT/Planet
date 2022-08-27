import React from 'react';
import './Home.css';

import Icon3 from '../../img/icon3.png';
import Blue from '../../img/Blue.png';
import Green from '../../img/green.png';
import Blur from '../BlurComponent/Blur';


const Home = () => {
    const homes = [
        {
            title: 'Learn about the environment',
            mainIdea: '  Environment is everything that exists around us.The environment can be living(biological) or non- living(abiotic). The environment includes physics, chemistry, and other natural phenomena.'
        },
        {
            title: 'The concept of the natural environment',
            mainIdea: 'The natural environment is an environment that includes all living and non-living organisms that occur naturally on Earth. The interactions between living things create a common habitat among species.'
        },
        {
            title: 'Elements of the natural environment',
            mainIdea: 'Environmental factors are natural phenomena that make up the environment such as light, temperature, gas, water, etc. Organisms inhabit their environment, constantly interacting and becoming adapted to conditions within the environment itself. In the environment, there are always different interactions between animals, plants, soil, water, as well as other living and non-living things.'
        },
        {
            title: 'The role of the natural environment',
            mainIdea: 'All natural resources are substances produced by natural processes. Today, the exploitation of natural resources also has a significant impact on the environment and climate changes. If people only know how to exploit nature without protecting them, it is difficult to survive for a long time.'
        }
    ];


    return (
        <div className="home">
            <div className="h-left">
                {homes.map((home, index) => {
                    return (
                        <div className="h-title" key={index}>
                            <span>{home.title}</span>
                            <span>{home.mainIdea}</span>
                            <Blur />
                        </div>
                    );
                })}

            </div>

            <div className='h-right'>
                <img src={Blue} alt="" />
                <img src={Green} alt="" />
                <img src={Icon3} alt="" />
            </div>



        </div>
    )
}

export default Home