import React from 'react';
const Card = ({ children, className, innerClasss  }) => {
    return (
        <div className={`border border-0 rounded-4 p-1 gradient-bg ${className || ''}`}>
            <div className={`p-4 rounded-4 ${innerClasss || ''}`} style={{backgroundColor:'#111436'}}>
                {children}
            </div>
        </div>
    );
};
export default Card;