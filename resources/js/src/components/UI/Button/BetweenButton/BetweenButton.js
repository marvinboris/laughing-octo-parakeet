import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ children, color, icon, iconColor = 'reset', className = '', size, pill = false, onClick }) => <Button onClick={onClick} color={color} size={size} className={"d-inline-flex justify-content-center align-items-center " + (pill ? ' rounded-pill ' : '') + className}>
    {children}
    <FontAwesomeIcon size="lg" icon={icon} className={"ml-3 text-" + iconColor} />
</Button>;