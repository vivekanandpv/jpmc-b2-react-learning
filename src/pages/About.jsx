import React from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';

const About = (props) => {
    const qp = queryString.parse(useLocation().search);

    return (
        <>
            <h3>About Component</h3>
            <pre>
                {JSON.stringify(qp, null, 2)}
            </pre>
        </>
    );
};

export default About;