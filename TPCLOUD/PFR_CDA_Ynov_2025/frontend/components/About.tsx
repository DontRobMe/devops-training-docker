import { Button } from "@heroui/react";
import { Info } from 'lucide-react';

export default function About({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-neutral-50 rounded-lg p-6 max-w-sm mx-4 w-full shadow-lg text-center flex flex-col h-[70vh]">
                <Info size={40} className="text-orange-400 mx-auto mb-4" />

                <h2 className="text-lg font-bold text-orange-400 mb-6">
                    A propos de MatchMe
                </h2>

                <p className="text-gray-700 text-base mb-6 text-justify overflow-y-auto pr-2 custom-scrollbar flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a tempus eros, sit amet luctus risus. Maecenas sed elit ac turpis dignissim feugiat.
                    Vivamus consequat, tellus a porta eleifend, metus mauris pellentesque arcu, quis ornare nisl sapien tempor arcu. Morbi porta quis odio a bibendum.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum non neque vel cursus. Cras porta tellus sed
                    vehicula tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a tempus eros, sit amet luctus risus. Maecenas sed elit ac turpis dignissim feugiat.
                </p>

                <div className="flex border-t border-gray-200 -mx-6 -mb-6 mt-auto pt-4">
                    <Button
                        variant="light"
                        className="flex-1 py-3 text-gray-700 font-semibold rounded-bl-lg rounded-br-lg"
                        onClick={onClose}
                    >
                        Fermer
                    </Button>
                </div>
            </div>
        </div>
    );
}