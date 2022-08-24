import React from 'react';
import './Home.css';

import Icon3 from '../../img/icon3.png';
import Blue from '../../img/Blue.png';
import Green from '../../img/green.png';
import Blur from '../BlurComponent/Blur';


const Home = () => {


    return (
        <div className="home">
            <div className="h-left">
                <div className="h-title">
                    <span>Learn about the environment</span>
                    <span>
                        Environment is everything that exists around us.
                        The environment can be living (biological) or non-living (abiotic).
                        The environment includes physics, chemistry, and other natural phenomena.
                    </span>
                </div>
                <div className="h-title">
                    <span>
                        The concept of the natural environment
                    </span>
                    <span>
                        The natural environment is an environment that includes
                        all living and non-living organisms that occur naturally on Earth.
                        The interactions between living things create a common habitat among species.
                    </span>
                    <Blur />
                </div>

                <div className="h-title">
                    <span>Elements of the natural environment</span>
                    <span>
                        Environmental factors are natural phenomena that make up the environment such as light,
                        temperature, gas, water, etc. Organisms inhabit their environment, constantly interacting
                        and becoming adapted to conditions within the environment itself. In the environment,
                        there are always different interactions between animals, plants, soil, water, as well as other living
                        and non-living things.
                    </span>
                </div>
                <div className="h-title">
                    <span>The role of the natural environment</span>
                    <span>
                        All natural resources are substances produced by natural processes. Today, the exploitation of
                        natural resources also has a significant impact on the environment and climate changes.
                        If people only know how to exploit nature without protecting them, it is difficult to survive for a long time.
                    </span>
                </div>
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