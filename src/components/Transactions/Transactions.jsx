import React from 'react';
import PropTypes from 'prop-types';
import './Transactions.scss';

const Transactions = (props) => {

    const {trans} = props;

    return (

        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {

                    trans.map((item) => (

                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>

                    ))

                }
                
            </tbody>
        </table>

    );

};

Transactions.propTypes = {
    trans: PropTypes.array
};

export default Transactions;