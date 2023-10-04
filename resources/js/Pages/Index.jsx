import React, { useState, Fragment } from 'react';
import App from "@/Layouts/App.jsx";
import Modal from "@/Components/Modal.jsx";
import SignInForm from "@/Components/SignInForm.jsx";
import SignUpForm from "@/Components/SignUpForm.jsx";

export default function Index() {
    const [signInModal, setSignInModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);

    return (
        <>
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
                <div>
                    <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/>
                    <h2 className="mt-6 text-xl md:text-3xl font-extrabold text-slate-900">
                        Passwordless Authentication
                    </h2>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <div>
                            <button onClick={() => setSignInModal(true)} type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-600 hover:bg-slate-300/20 transition duration-150">
                                Sign In
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setSignUpModal(true)} type="button"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-600 hover:bg-slate-300/20 transition duration-150">
                                Sign Up
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative lg:block hidden w-full h-full bg-black">
                <img className="absolute inset-0 w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=100" alt="Image"/>
            </div>

            <Modal show={signInModal} onClose={() => setSignInModal(false)}>
                <SignInForm />
            </Modal>

            <Modal show={signUpModal} onClose={() => setSignUpModal(false)}>
                <SignUpForm />
            </Modal>
        </>
    )
}

Index.layout = (page) => <App children={page}/>;
