import React from 'react';

import '../assets/styles/App.scss';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <>
            <Search />
            {initialState.mylist !==undefined && initialState.mylist?.length > 0 && (
                <Categories title="Mi lista">
                    <Carousel>
                    {initialState.mylist.map(item =>
                        <CarouselItem key={item.id} {...item} />    
                    )}
                    </Carousel>
                </Categories>
            )}
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends?.map(item =>
                        <CarouselItem key={item.id} {...item} />    
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales">
                <Carousel>
                    {initialState.originals?.map(item =>
                        <CarouselItem key={item.id} {...item} />    
                    )}
                </Carousel>
            </Categories>
        </>
    );
}

export default Home;