import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({ children, show = false, onClose = () => {}}) {
    return (
        <>
            <Transition show={show} as={Fragment} leave="duration-200">
                <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={onClose}>
                    <div className="flex items-center justify-center min-h-screen px-2.5 py-5 text-center sm:block sm:p-0 sm:my-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block bg-white rounded-lg px-2 py-4 text-left overflow-hidden align-middle shadow-xl transform transition-all w-full sm:mx-auto sm:my-7 sm:max-w-xl">
                                {children}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
