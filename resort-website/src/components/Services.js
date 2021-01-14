import React, { Component } from 'react';
import {FaHiking,FaBeer, FaCocktail, FaShuttleVan} from "react-icons/fa"
import Title from './Title';


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktail",
                info: 'Lorem ipsum sit amet consectetur adipisicing elit, corporis! '
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Lorem ipsum sit amet consectetur adipisicing elit, corporis! '
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Lorem ipsum sit amet consectetur adipisicing elit, corporis! '
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info: 'Lorem ipsum sit amet consectetur adipisicing elit, corporis! '
            }
        ]
    };
    render() {
        return (
            <section className="Services">
                <Title title='Services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
