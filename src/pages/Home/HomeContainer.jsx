import axios from 'axios'
import React from 'react'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Preloader from '../../UI/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesFetchAC } from '../../redux/actions/actionCreator';

const HomeContainer = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const dispatch = useDispatch();
    const images = useSelector(state => state.getImages.images)

    React.useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            dispatch(getImagesFetchAC(images))
            setIsLoading(false)
        }, 700)
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Preloader />
                    : <Card style={{ color: '#000' }}>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {
                                images && images.map(image => {
                                    const { id, thumbnailUrl } = image
                                    return (
                                        <div key={id}>
                                            <Tippy interactive={true} interactiveBorder={20} delay={100}
                                            content={<NavLink to="/details"><button className="btn btn-primary">Подробнее</button></NavLink>}>
                                                <img src={thumbnailUrl} />
                                            </Tippy>
                                        </div>
                                    )
                                })
                            }
                        </Card.Body>
                    </Card>
            }
        </>
    )
}

export default HomeContainer