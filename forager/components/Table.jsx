import React from "react";

const Table = ({mushroom1, setMushroom1, mushroom2, setMushroom2}) => {
    const handleRemoveRow = (feature) => {
        const updatedMushroom1 = { ...mushroom1 };
        const updatedMushroom2 = { ...mushroom2 };
        delete updatedMushroom1.details[feature];
        delete updatedMushroom2.details[feature];
        setMushroom1(updatedMushroom1);
        setMushroom2(updatedMushroom2);
    };

    const handleDoubleClick = (feature) => {
        const newValue = prompt("Enter new value:");
        if (newValue && /^[a-zA-Z]+$/.test(newValue)) {
            const updatedMushroom1 = { ...mushroom1 };
            updatedMushroom1.details[feature].description = newValue;
            setMushroom1(updatedMushroom1);
        } else {
            alert("Please enter a valid character.");
        }
    };
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white shadow-lg py-2">
                <table className="w-full border-collapse text-center table-fixed text-based text-[#203B5F]">
                    <tbody>
                        {Object.keys(mushroom1.details).map((feature) => (
                            <tr key={feature}>
                                <td className="p-2 border-r-2 border-black relative">
                                    <button 
                                        className="bg-[#D9D9D9] text-black text-xs rounded-full w-4 h-4 flex items-center justify-center absolute left-2 top-1/2 transform -translate-y-1/2"
                                        onClick={() => handleRemoveRow(feature)}
                                    >
                                        x
                                    </button>
                                    <div className="flex items-center justify-center gap-2 ml-6">
                                        <span>{mushroom1.details[feature].description}</span>
                                    </div>
                                    <div className="bottom-0 left-0 w-full h-0.5 bg-black"></div>
                                </td>
                                <td className="p-2 border-r-2 border-black">{mushroom1.details[feature].name}</td>
                                <td className="p-2">{mushroom2.details[feature].description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Table; 