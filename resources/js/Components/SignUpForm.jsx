import React from 'react';
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/outline/index.js";
import { useForm } from "@inertiajs/react";

export default function SignUpForm({ closeModal = () => {} }) {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('register.store'), {
            onSuccess: () => {
                reset();
                closeModal();
            }
        });
    }

    return (
        <form onSubmit={submitHandler} className="p-5">
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-900">
                    Name
                </label>
                <div className="group relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <IdentificationIcon className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-400" />
                    </div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border border-zinc-300 py-1.5 pl-10 text-zinc-900 transition duration-300 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-100 sm:text-sm sm:leading-6"
                        placeholder="John Doe"
                        autoComplete="off"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>
                {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900">
                    Email
                </label>
                <div className="group relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <EnvelopeIcon className="h-5 w-5 text-zinc-400 group-focus-within:text-blue-400" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border border-zinc-300 py-1.5 pl-10 text-zinc-900 transition duration-300 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-100 sm:text-sm sm:leading-6"
                        placeholder="your@email.com"
                        autoComplete="off"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </div>
                {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div className="mt-4 flex items-center justify-end">
                <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white">
                    Sign Up
                </button>
            </div>
        </form>
    )
}
