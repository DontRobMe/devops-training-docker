import { Button, Avatar, Input } from "@heroui/react";
import { useRouter } from "next/router";
import { User, LifeBuoy, Info, FileText, Trash2, Camera, ChevronLeft } from "lucide-react"

import BottomNavbar from '../../components/BottomNavbar';
import Header from '../../components/Header';

export default function PersonalInfoPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-50 pb-20">
            <Header/>

            <main className="flex flex-col items-center mt-40 w-full px-6">
                <div className="relative mb-6">
                    <Avatar
                        src="/assets/profile_mia.jpg"
                        alt="Mia Khalifa"
                        className="w-32 h-32"
                        isBordered
                        color="warning"
                    />
                    <Button
                        isIconOnly
                        className="absolute bottom-0 right-0 bg-black text-yellow-400 rounded-full w-9 h-9"
                        aria-label="Change profile picture"
                    >
                        <Camera size={20} />
                    </Button>
                </div>

                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Mia Khalifa</h1>
                <p className="text-gray-500 mb-8">13 février 1999</p>

                <div className="w-full max-w-sm space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                            id="email"
                            placeholder="content"
                            variant="bordered"
                            value="content"
                            isReadOnly
                            classNames={{
                                input: "text-black",
                                inputWrapper: "cursor-default"
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                        <Input
                            id="ville"
                            placeholder="content"
                            variant="bordered"
                            value="content"
                            isReadOnly
                            classNames={{
                                input: "text-black",
                                inputWrapper: "cursor-default"
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="**********"
                            variant="bordered"
                            value="**********"
                            isReadOnly
                            classNames={{
                                input: "text-black",
                                inputWrapper: "cursor-default"
                            }}
                        />
                    </div>
                </div>

                <Button
                    color="primary"
                    className="mt-10 bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200"
                >
                    Modifier les informations
                </Button>
            </main>

            <BottomNavbar />
        </div>
    );
}