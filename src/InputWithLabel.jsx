import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ id, value, type = "text", onInputChange, children }) => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    },[]);
    
    return (
        <>
            <label htmlFor={id}>{children}</label>
            &nbsp;
            <input 
                type={type} 
                id={id} 
                value={value}
                onChange={onInputChange}
                ref={inputRef}
            />
        </>
    );
};

export default InputWithLabel;