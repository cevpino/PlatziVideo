import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).lenght > 0;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            props.getVideoSource(id);
            setLoading(false);    
        }, 2000);
    }, []);
    if (loading) {
        return <h2>Cargando...</h2>
    }

    return hasPlaying ? (
        <section>
            <div className="Player">
                <video controls autoPlay >
                    <source src={props.playing.source} type="video/mp4" />
                </video>
            </div>
            <div className="Player-back">
                <button type="button" onClick={()=> props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </section>
    ) : <Redirect to='/404/' /> ;
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);