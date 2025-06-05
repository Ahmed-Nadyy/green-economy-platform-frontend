import React from 'react';

export const Link = ({ href, className = '', children }) => {
    return (
        <a href={href} className={`${className}`}>
            {children}
        </a>
    );
};