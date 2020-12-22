import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className="homepage" data-test="homepage">
            <Directory />
        </div>
    )
}

export default HomePage;