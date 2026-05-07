import React, { createElement } from 'react';

const headersTable = ["header-1", "header-2", "header-3"]


const Task1p3 = () => {
const cards = headersTable.map((headingTitle, index) => {
        return React.createElement(
            'div',
            { className: 'card', key: index },
            React.createElement(
                'h2',{ className: 'div-heading' }, 
                `To jest nagłówek ${headingTitle}`
            )
        );
    });
return React.createElement(React.Fragment, null, cards);
};
export default Task1p3;