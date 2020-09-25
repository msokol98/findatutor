import React from 'react';

const Filters = ( { data } ) => {
    const filtersJSX = data.map(el => {
        return ( 
            <div key={el.id}>
                <input id={el.id} onClick={el.toggle} type={el.type} />
                <label>{el.name}</label>
            </div>
         );
    });

    return filtersJSX;
}
 
export default Filters;