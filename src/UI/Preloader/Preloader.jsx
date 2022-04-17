import React from 'react'
import preloader from '../../assets/images/preloader-test.gif'

const Preloader = () => {
    return (
        <div>
            <img
                style={{ width: '250px', height: '250px', margin: '0 auto' }}
                src={preloader} />
        </div>
    )
}

export default Preloader