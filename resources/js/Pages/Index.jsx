import React from 'react';
import App from "@/Layouts/App.jsx";
import { Link, usePage } from "@inertiajs/react";

export default function Index() {
    const {auth} = usePage().props;

    return (
        <>
            <div className="flex flex-col items-center">
                <img className="items-start h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/>
                <h2 className="mt-6 text-xl md:text-3xl font-extrabold text-slate-900">
                    Passwordless Authentication
                </h2>
                <div className="mt-5 text-sm text-center">
                    You are authenticated as <span className="font-medium text-blue-500">{auth.user.email}</span>
                </div>
                <Link as="button" method="post" href={route('sign-out')} className="mt-5 text-xs underline">
                    Sign Out
                </Link>
            </div>
        </>
    )
}

Index.layout = (page) => <App children={page}/>;
