import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Avatar } from "@heroui/react";
import {User, LifeBuoy, Info, FileText, Trash2, Camera,
} from "lucide-react";

import BottomNavbar from "../../components/BottomNavbar";
import Header from "../../components/Header";
import DeleteAccountModal from "../../components/DeleteAccount";
import AboutModal from "../../components/About";
import SupportModal from "../../components/Support";
import TermsModal from "../../components/Terms";

export default function ProfilePage() {
    const router = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showSupportModal, setShowSupportModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const menuItems = [
        { icon: User, label: "Informations personnelles", path: "/profile/personal-info" },
        { icon: LifeBuoy, label: "Support - nous contacter", action: () => setShowSupportModal(true) },
        { icon: Info, label: "À propos de MatchMe", action: () => setShowAboutModal(true) },
        { icon: FileText, label: "Conditions générales", action: () => setShowTermsModal(true) },
        { icon: Trash2, label: "Supprimer le compte", action: () => setShowDeleteModal(true) },
    ];

    const handleLogout = () => {
        console.log("Déconnexion...");
        router.push("/login");
    };

    const handleDeleteAccount = () => {
        console.log("Compte supprimé !");
        setShowDeleteModal(false); // Ajouter API pour supprimer compte
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-50 pb-20">
            <Header />

            <div className="flex flex-col items-center mt-40 mb-15">
                <div className="relative">
                    <Avatar
                        src="/assets/profile_mia.jpg"
                        alt="Mia Khalifa"
                        className="w-32 h-32"
                        isBordered
                        color="warning"
                    />
                    <div className="absolute bottom-0 right-0 bg-black rounded-full p-2">
                        <Camera size={20} className="text-white" />
                    </div>
                </div>
                <h1 className="text-2xl font-semibold mt-4">Mia Khalifa</h1>
            </div>

            <div className="w-full max-w-sm px-6">
                {menuItems.map((item, index) => {
                    const isDelete = item.label === "Supprimer le compte";

                    return (
                        <Button
                            key={index}
                            variant="light"
                            className={`flex justify-between items-center w-full px-4 py-3 mb-5 rounded-lg shadow-sm ${
                                isDelete ? "bg-red-50" : "bg-white"
                            }`}
                            onClick={() => {
                            if (item.action) {
                                item.action();
                            } else if (item.path) {
                                router.push(item.path);
                            }
                            }}
                        >
                            <div className="flex items-center">
                                <item.icon
                                    size={20}
                                    className={`mr-3 ${
                                        isDelete ? "text-red-600" : "text-gray-700"
                                    }`}
                                />
                                <span
                                    className={`text-lg ${
                                        isDelete ? "text-red-700" : "text-gray-800"
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </div>
                            <span
                                className={`text-xl font-bold ${
                                    isDelete ? "text-red-500" : "text-gray-500"
                                }`}
                            >
                                &gt;
                            </span>
                        </Button>
                    );
                })}

                <Button
                    color="warning"
                    className="w-full mt-6 py-3 rounded-full text-white font-semibold text-lg"
                    onClick={handleLogout}
                >
                    Se déconnecter
                </Button>
            </div>

            {showDeleteModal && (
                <DeleteAccountModal
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteAccount}
                />
            )}

            {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />}
            {showSupportModal && <SupportModal onClose={() => setShowSupportModal(false)} />}
            {showTermsModal && <TermsModal onClose={() => setShowTermsModal(false)} />}

            <BottomNavbar />
        </div>
    );
}