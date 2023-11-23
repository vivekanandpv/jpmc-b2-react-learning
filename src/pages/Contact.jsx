import React from 'react';
import {useParams} from 'react-router-dom';

const Contact = (props) => {
    const {id} = useParams();

    return (
        <>
            <h3>Contact Component {id}</h3>
        </>
    );
};

export default Contact;