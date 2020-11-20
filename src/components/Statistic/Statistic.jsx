import PropTypes from 'prop-types';
import React from 'react';
import './Statistic.scss';

const Statistic = (props) => {

    const {stat, title} = props;
    return (

    <section className="statistics">
        {title !== ''? <h2 className="title">{title}</h2> : ''}
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

Statistic.propTypes = {
    stat: PropTypes.array,
    title: PropTypes.string
};

export default Statistic;