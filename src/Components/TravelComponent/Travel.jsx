import React from 'react';
import './Travel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from "swiper";
import Travel1 from "../../img/catba.jpg";
import Travel2 from "../../img/cattien.jpg";
import Travel3 from "../../img/xuanthuy.jpg";
import Travel4 from "../../img/pumat.jpg";
import Tobe from "../../img/tobe.png"

const Travel = () => {
    const intros = [
        {
            name: 'Cat Ba National Park',
            img: Travel1,
            review:
                "Cat Ba National Park is of the most famous tourist destinations to experience and explore nature in Hai Phong today. In 2004, Cat Ba National Park was recognized by UNESCO as a biosphere reserve of the world."
        },
        {
            name: 'Cat Tien National Park',
            img: Travel2,
            review:
                "Cat Tien National Park is a forest containing valuable biodiversity resources not unique to Vietnam. That has been confirmed through the title of World Biosphere Reserve recognized by UNESCO in 2001; Stretching over 3 provinces of Dong Nai, Lam Dong and Binh Phuoc with more than 80,000ha surrounded by 90km of Dong Nai River, Cat Tien National Park has an important function for our own lives."
        },
        {
            name: 'Xuan Thuy National Park',
            img: Travel3,
            review:
                "Xuan Thuy National Park is a large alluvial area located south of the Red River mouth, about 150 km southeast of Hanoi, with a total natural area of 7,100 ha. The fertile alluvium of the Red River and the sea has created a wetland with many rare species of wildlife and migratory birds."
        },
        {
            name: 'Pu Mat National Park',
            img: Travel4,
            review:
                "For scientists, the name Pu Mat is not strange because this is one of the first places where a rare animal species was discovered: Saola. With an area of core zone of 94,804 ha and buffer zone of 86,000 ha, stretching over 3 districts of Tuong Duong, Con Cuong and Anh Son of Nghe An province, Pu Mat is the residence area of Thai people who have lived here."
        },
        {
            name: '...',
            img: Tobe,
            review: '...'
        }
    ]
    return (
        <div className="t-travel" >
            <div className='t-heading'>
                <span>Introduction to</span>
                <span> national park tourism </span>
                <span>in Vietnam</span>
                <div className="blur t-blur1"
                    style={{ background: "#59f056" }}>
                </div>
                <div className="blur t-blur2"
                    style={{ background: "skyblue" }}>
                </div>
            </div>
            {/**Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {intros.map((intro, index) => {
                    return (
                        <SwiperSlide key={index}>

                            <div className="travel">
                                <span>{intro.name}</span>
                                <img src={intro.img} alt />
                                <span>{intro.review}</span>
                            </div>

                        </SwiperSlide>


                    );
                })}
            </Swiper>

        </div>

    )
}

export default Travel;