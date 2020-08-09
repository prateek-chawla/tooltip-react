import React, { useState } from "react";

import Tooltip from "../UI/Tooltip/Tooltip";

import "./Layout.css";

const Layout = props => {
	const [position, setPosition] = useState("top");

    // Set position state as the value selected in dropdown
	const positionChangeHandler = event => {
		setPosition(event.target.value);
	};

	return (
        <div className="Layout">

            {/* Position Selection Dropdown */}
            <div className='PositionDropdown'>
				<label>Pick Tooltip Position</label>
				<select value={position} onChange={positionChangeHandler}>
                    
					<option value="top">Top</option>
					<option value="bottom">Bottom</option>
					<option value="right">Right</option>
					<option value="left">Left</option>
                    
				</select>
			</div>

            {/* Pass Position to Tooltip as props */}
            <Tooltip position={position} />

		</div>
	);
};

export default Layout;
