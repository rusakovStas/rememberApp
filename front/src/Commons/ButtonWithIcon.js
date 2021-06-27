import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";



const ButtonWithIcon = ({icon, children, ...props}) => {
    return (
            <Button {...props} className="btn-labeled">
                <span className="btn-label"><FontAwesomeIcon color={"black"} icon={icon} /> </span>{children}
            </Button>
    )
}

export default ButtonWithIcon;
