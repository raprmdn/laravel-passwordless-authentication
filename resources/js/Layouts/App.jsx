import React from 'react';

export default function App({ children }) {
    return (
        <>
            <div className="flex min-h-full h-screen flex-col md:grid md:grid-cols-2">
                {children}
            </div>
        </>
    )
}
