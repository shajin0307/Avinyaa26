import React from "react";

import logoDark from "../../assets/avinyaa-logo-new.png";
import logoLight from "../../assets/avinyaa-logo-light.png";

const Logo = ({ className, isDark }) => {
    return (
        <img
            src={isDark ? logoDark : logoLight}
            alt="Avinyaa Logo"
            className={className}
        />
    );
};

export default Logo;
