import React, { useState, Fragment } from 'react';
import App from "@/Layouts/App.jsx";
import Modal from "@/Components/Modal.jsx";
import SignInForm from "@/Components/SignInForm.jsx";
import SignUpForm from "@/Components/SignUpForm.jsx";
import { usePage } from "@inertiajs/react";

export default function SignIn() {
    const {flash} = usePage().props;
    const [signInModal, setSignInModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center">
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

                {flash.message && (
                    <p className={`mt-5 text-xs text-center ${flash.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {flash.message}
                    </p>
                )}
            </div>

            <Modal show={signInModal} onClose={() => setSignInModal(false)}>
                <SignInForm closeModal={setSignInModal} />
            </Modal>

            <Modal show={signUpModal} onClose={() => setSignUpModal(false)}>
                <SignUpForm closeModal={setSignUpModal} />
            </Modal>
        </>
    )
}

SignIn.layout = (page) => <App children={page}/>;
