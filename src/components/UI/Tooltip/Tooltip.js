import React from "react";

import "./Tooltip.css";

const Tooltip = props => {

    // Recieves Position in props and adds it to ClassList
    const classList = ["Tooltip", props.position].join(" ");

    return (
        // Tooltip container
		<div className={classList}>
            {/* Tooltip Button */}
			<div className="Tooltip__Front">Upload File</div>
            {/* Tooltip Content */}
			<div className="Tooltip__Back">&lt; 25MB</div>
		</div>
	);
};

export default Tooltip;
