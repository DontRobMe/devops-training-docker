import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { PhoneCall } from 'lucide-react';

export default function Support({ onClose }: { onClose: () => void }) {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log("Sujet:", subject);
        console.log("Description:", description);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-neutral-50 rounded-lg p-6 max-w-sm mx-10 w-full shadow-lg text-center">
                <PhoneCall size={40} className="text-orange-400 mx-auto mb-4" />

                <h2 className="text-lg font-bold text-orange-400 mb-6">Support</h2>

                <div className="text-left mb-4">
                    <label htmlFor="subject" className="block text-orange-400 text-sm font-semibold mb-1">Sujet</label>
                    <select
                        id="subject"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="technical">Problème1</option>
                        <option value="billing">Problème2</option>
                        <option value="feature_request">Problème3</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                <div className="text-left mb-6">
                    <label htmlFor="description" className="block text-orange-400 text-sm font-semibold mb-1">Description</label>
                    <textarea
                        id="description"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="content"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex border-t border-gray-200 -mx-6 -mb-6 mt-6">
                    <Button
                        variant="light"
                        className="flex-1 py-3 text-gray-700 font-semibold rounded-bl-lg"
                        onClick={onClose}
                    >
                        Annuler
                    </Button>
                    <div className="border-r border-gray-200"></div>
                    <Button
                        variant="light"
                        className="flex-1 py-3 text-orange-400 font-semibold rounded-br-lg"
                        onClick={handleSubmit}
                    >
                        Envoyer
                    </Button>
                </div>
            </div>
        </div>
    );
}