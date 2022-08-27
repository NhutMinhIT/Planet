import React from 'react';
import IconBenefit from '../../img/benefit.png';
import Blue from '../../img/Blue.png';
import Green from '../../img/green.png';
import Blur from '../BlurComponent/Blur';
import './Benefit.css';


const Benefit = () => {
    const benefits = [

        {
            title: 'The environment is an ideal living space for creatures and humans',
            main: 'People is daily life needs a certain space to function such as resting, working, etc., Thus, the environment requires standards of physiological and chemical aspects The living space of people changes constantly according to the development of scientific technology. As today, the construction of sewer systems to meet the circulation of human-made wastewater to avoid the need for unblocking Drain as before.'

        },
        {
            title: 'Containing waste is the vital function of the environment',
            main: 'In the process of human development, people always excrete substances into the environment and are decomposed under the influence of microorganisms. In the undeveloped period, the waste decomposition process is mostly left to nature. But now with the rapid population growth and the development of science and technology and urbanization, the amount of waste is constantly being discharged, causing the amount of waste to be overloaded, causing serious pollution. Many places where waste is discharged, especially production and daily-life waste, many places are seriously polluted by garbage such as polluting water sources, blocking underground drains, etc. To reduce that situation we must Collect and treat properly as in our family regularly to avoid overflowing and polluting water sources...etc'
        },
        {
            title: 'The environment is a place to store and provide information for people',
            main: 'The environment is a place to record the evolutionary history of human development on earth' +

                'Provide early warning signals of danger to humans and living creatures before natural disasters' +

                'It is a place to preserve the aesthetic, religious and cultural values of people...etc' +

                'The environment also protects people and animals from external influences' +

                'In short, the environment is a place where we need to always protect and preserve because the environment is a practical source of life and gives people the most prosperous development.'
        }
    ];
    return (
        <div className="benefit">
            <div className="b-left">
                {benefits.map((benefit, index) => {
                    return (
                        <div className="b-idea" key={index}>
                            <span>{benefit.title}</span>
                            <span>{benefit.main}</span>
                            <Blur />
                        </div>
                    )
                })}
            </div>
            <div className="b-right">
                <img src={Blue} alt="" />
                <img src={Green} alt="" />
                <img src={IconBenefit} alt="" />
            </div>
        </div>
    )
}

export default Benefit