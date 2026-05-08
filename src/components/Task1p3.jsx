import React, { createElement } from 'react';

const headersTable = ["header-1", "header-2", "header-3"]
const paragraph = ["coscos", "coscos123", "socsos12354"]

const Task1p3 = () => {
const cards = headersTable.map((headingTitle, index) => {
        return React.createElement(
            'div',
            { className: 'card', key: index },
            React.createElement(
                'h2',{ className: 'div-heading' }, 
                `To jest nagłówek ${headingTitle}`
            ),
            React.createElement(
                'p',
                {className : 'paragraph-div'},
                `${paragraph[index]}`
            ),
            React.createElement(
                'a',
                {className : 'div-a', href: '#', target: '_blank'},
                'cos'
            )
        );
    });
return React.createElement(React.Fragment, null, cards);
};
export default Task1p3;