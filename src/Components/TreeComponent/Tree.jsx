import React from 'react';
import './Tree.css';
import Icon2 from '../../img/icon2.png';
import Land1 from '../../img/land1.png';
import Land2 from '../../img/land2.png';
import Blur from '../BlurComponent/Blur';

const Tree = () => {
    const trees = [
        {
            name: 'Chinaberry',
            decription: 'The fully grown tree has a rounded crown, and commonly measures 7–12 metres (20–40 feet) tall, exceptionally 45 m (150 ft). The leaves are up to 50 centimetres (20 inches) long, alternate, long-petioled, two or three times compound (odd-pinnate); the leaflets are dark green above and lighter green below, with serrate margins. The flowers are small and fragrant, with five pale purple or lilac petals, growing in clusters. The fruit is a drupe, marble-sized, light yellow at maturity, hanging on the tree all winter, and gradually becoming wrinkled and almost white. As the stem ages and grows, changes occur that transform its surface into bark.',
        },
        {
            name: 'Eucalyptus',
            decription: 'Eucalyptus, Eucalyptus is a genus of flowering plants in the family Myrtaceae. The members of this branch are from Australia. There are more than 700 species of eucalyptus, most of which are found in Australia, and a small number are found in New Guinea and Indonesia and a far northern region of the Philippines and Taiwan. Eucalyptus species have been cultivated in tropical and tropical regions including the Americas, Europe, Africa, the Mediterranean region, the Middle East, China, peninsular India... and also Vietnam.'
        },
        {
            name: 'Khaya senegalensis',
            decription: 'It is a great tree that can grow from 35-40 m high, the diameter of the tree can sometimes reach 2m (in the Zoo and Botanical Garden of Ho Chi Minh City). Evergreen tree, dense foliage, many branches, young branches curved down. Double leaves with feathers once even, inflorescences clustered, small white flowers with 4 small white petals stick together, flower season April-May. The small, white, globular capsule ripens in October, when ripe, it bursts into 4 pieces (usually the old mother-of-pearl trees bear fruit). The bark is gray-brown, the cracked bark is round like a skull, so the tree is also called monkey skull.'

        },
        {
            name: 'Barringtonia acutangula',
            decription: 'The red-flowered sesame plant is called the contract, whose scientific list is Barringtonia acutangula (L.) Gaertn. subsp. spicata (Blume) Pay. This is the type of the water East South Asia. In Vietnam, there are from Hoa Binh to Binh Duong.'
        }
    ]
    return (
        <div className="tree">
            <div className="t-left">
                {trees.map((tree, index) => {
                    return (
                        <div className="title-left" key={index}>
                            <span>{tree.name}</span>
                            <span>{tree.decription}</span>
                            <Blur />
                        </div>
                    );
                })}

            </div>
            <div className='t-right'>
                <img src={Land1} alt="" />
                <img src={Land2} alt="" />
                <img src={Icon2} alt="" />
            </div>
        </div>

    )
}

export default Tree