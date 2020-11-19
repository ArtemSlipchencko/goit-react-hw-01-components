import React from 'react';

const Statistic = (props) => {

    const {stat, title} = props;

    return (

    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
            {

                stat.map((el) => 

                <li className="item" key={el.id}>
                    <span className="label">{el.label}</span>
                    <span className="percentage">{el.percentage}%</span>
                </li>

                )

            }
            
        </ul>
    </section>

    )
};

export default Statistic;