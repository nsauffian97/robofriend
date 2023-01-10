import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                // onChange is a function where if the input is changed by user then it will use the searchChange prop
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;