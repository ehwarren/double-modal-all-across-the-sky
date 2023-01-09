import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import logo from "./logo.svg";

import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    CalendarIcon,
    ChartBarIcon,
    CircleStackIcon,
    CubeIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    LifebuoyIcon,
    Square3Stack3DIcon,
    UsersIcon,
    ViewfinderCircleIcon,
    WrenchIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);
    const handleNavlinkClicked = () => {
        //Here we open the next modal, and close the current one. The ordering here does not make a difference
        setSidebarOpen(false);
        setAlertDialogOpen(true);
    };

    return (
        <div className="bg-slate-400 h-[200vh] w-screen">
            <button className="float-right mr-5">
                <Bars3Icon onClick={() => setSidebarOpen(!sidebarOpen)} className="w-5 h-5" />
            </button>
            <div className="container mx-auto">
                <div className="pt-3">
                    <h1 className="text-xl font-bold">Double dialog all across the sky</h1>
                    <p>Click the menu icon above (top right), then click any navitem in the popout dialog</p>
                </div>
            </div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={handleNavlinkClicked}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                                        <h3 className="ml-2 text-white font-bold">DoubleDialog</h3>
                                    </div>
                                    <nav className="mt-5 space-y-1 px-2 flex flex-col">
                                        {["item1", "item2", "item3"].map((item) => (
                                            <span className="p-1 text-white hover:text-blue-300 cursor-pointer" onClick={handleNavlinkClicked}>
                                                {item}
                                            </span>
                                        ))}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Transition appear show={alertDialogOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setAlertDialogOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Unsaved Changes
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-dark-500">Uh oh, looks like we've got some unsaved changes!</p>
                                    </div>

                                    <div className="mt-4">
                                        <button type="button" className="btn-primary" onClick={() => setAlertDialogOpen(false)}>
                                            Oopsies
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default App;
