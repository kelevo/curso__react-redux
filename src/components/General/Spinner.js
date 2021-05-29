import React from 'react';

import '../../css/spinner.css';

const Spinner = (props) => (
    <div class="center">
        <div className="lds-ripple"><div></div><div></div></div>
    </div>
);

export default Spinner;