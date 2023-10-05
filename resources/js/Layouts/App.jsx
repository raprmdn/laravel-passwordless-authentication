import React from 'react';

export default function App({ children }) {
    return (
        <>
            <div className="flex min-h-full h-screen flex-col md:grid md:grid-cols-2">
                <div className="relative flex grow flex-col items-center justify-center p-10">
                    <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-200">
                        <svg className="absolute w-full h-full" aria-hidden="true">
                            <defs>
                                <radialGradient id=":S1:-desktop" cx="100%">
                                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                                    <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
                                    <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
                                </radialGradient>
                                <radialGradient id=":S1:-mobile" cy="100%">
                                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                                    <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
                                    <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
                                </radialGradient>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#:S1:-desktop)" className="hidden lg:block"/>
                            <rect width="100%" height="100%" fill="url(#:S1:-mobile)" className="lg:hidden"/>
                        </svg>
                    </div>

                    {children}

                </div>
                <div className="relative lg:block hidden w-full h-full bg-black">
                    <img className="absolute inset-0 w-full h-full object-cover"
                         src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=100" alt="Image"/>
                </div>
            </div>
        </>
    )
}
