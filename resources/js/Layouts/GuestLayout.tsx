import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <header className="w-full flex justify-center">
                <div className="flex lg:justify-center lg:col-start-2">
                    <Link href="../" className="flex items-center">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        <span className="ml-2 text-xl font-semibold text-gray-800">Pet Studio</span>
                    </Link>
                </div>
            </header>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
