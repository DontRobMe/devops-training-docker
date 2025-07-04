import { Trash2 } from "lucide-react";
import { Button } from "@heroui/react";

interface DeleteAccountProps {
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteAccount({ onCancel, onConfirm }: DeleteAccountProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-neutral-50 rounded-lg p-6 max-w-xs w-full shadow-lg text-center">
                <Trash2 size={40} className="text-orange-400 mx-auto mb-4" />
                <h2 className="text-lg font-bold text-orange-400 mb-2">
                    Suppression de compte
                </h2>
                <p className="text-gray-700 mb-6 text-base">
                    Êtes-vous sûr de vouloir supprimer votre compte ?
                </p>
                <div className="flex border-t border-gray-200">
                    <Button
                        variant="light"
                        className="flex-1 py-3 text-gray-700 font-semibold rounded-bl-lg"
                        onClick={onCancel}
                    >
                        Annuler
                    </Button>
                    <div className="border-r border-gray-200"></div>
                    <Button
                        variant="light"
                        className="flex-1 py-3 text-orange-400 font-semibold rounded-br-lg"
                        onClick={onConfirm}
                    >
                        Supprimer
                    </Button>
                </div>
            </div>
        </div>
    );
}
