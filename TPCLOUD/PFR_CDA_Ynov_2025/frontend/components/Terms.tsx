import { Button } from "@heroui/react";
import { FileText } from 'lucide-react';

export default function Terms({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-neutral-50 rounded-lg p-6 max-w-sm mx-4 w-full shadow-lg text-center flex flex-col h-[70vh]">
                <FileText size={40} className="text-orange-400 mx-auto mb-4" />

                <h2 className="text-lg font-bold text-orange-400 mb-6">
                    Conditions générales
                </h2>

                <p className="text-gray-700 text-base mb-6 text-justify overflow-y-auto pr-2 custom-scrollbar flex-grow">
                    Nullam varius non massa ut dignissim. Quisque quis augue facilisis, placerat turpis non, facilisis turpis. Sed finibus fermentum mi, eu volutpat
                    augue tristique et. Vestibulum luctus pulvinar semper. Etiam volutpat lectus id quam fringilla, vitae tempus lorem tristique.

                    Cras sem ligula, ultricies luctus velit ac, blandit congue felis. Etiam tincidunt pellentesque enim, vel ultricies augue scelerisque sed.
                    Donec mollis, leo vel faucibus accumsan, sem velit elementum lectus, quis interdum purus orci eu diam. Morbi facilisis, libero ut venenatis auctor,
                    lorem nisl eleifend est, ut ultrices justo ex id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Fusce urna urna, finibus sit amet luctus at, imperdiet et tellus.
                    <br /><br />
                    Sed vel quam et magna vestibulum hendrerit. Integer nec odio eu enim commodo placerat. Nam vel felis nec nunc viverra volutpat.
                    Proin consectetur, magna a scelerisque bibendum, ex arcu vestibulum metus, eu fringilla tortor elit sit amet nunc.
                    Ut vitae tellus eu ipsum varius commodo. Sed at sapien vel libero luctus placerat.
                    <br /><br />
                    Aliquam erat volutpat. Mauris sit amet odio quis libero congue ultrices. In hac habitasse platea dictumst.
                    Vivamus auctor, lectus nec semper tincidunt, orci justo ultrices leo, ac aliquam turpis nulla et arcu.
                    Donec vel turpis sit amet libero fermentum ultrices. Phasellus eget nunc sit amet velit eleifend convallis.
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