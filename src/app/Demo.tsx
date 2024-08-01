export default function Demo() {
    return (
        <div id="features" className="container mx-auto max-w-4xl">
            <div className="flex z-20 justify-end gap-4 max-w-4xl bg-black rounded-tr-xl rounded-tl-xl mx-auto border border-white border-opacity-20">
                <div className="m-4 mr-0 p-2 text-xl bg-yellow-500 rounded-full" />
                <div className="m-4 ml-0 p-2 text-xl bg-red-500 rounded-full" />
            </div>
            <div className="w-full z-20 min-h-96 flex bg-black rounded-b-xl border border-t-0 border-white border-opacity-15">
                <div className="w-full z-20 min-h-full m-4 border border-white border-opacity-30 bg-[rgb(12,12,12)] overflow-hidden relative rounded-xl grid grid-cols-3 items-center">
                    <div className="w-full z-20 h-full flex flex-col items-center justify-around">
                        <div className="rounded-full w-32 overflow-hidden p-1 bg-gradient-to-br from-red-500 to-red-900 shadow-[0px_0px_20px_2px_red]">
                            <img className="rounded-full" src="./champions/Zed_0.jpg" alt="" />
                        </div>
                        <hr className="w-full border-b border-t-0 border-white border-opacity-30" />
                        <div className="rounded-full w-32 animate-pulse overflow-hidden p-1 bg-gradient-to-br from-blue-500 to-blue-900 shadow-[0px_0px_20px_2px_blue]">
                            <img className="rounded-full" src="./champions/Ahri_0.jpg" alt="" />
                        </div>
                    </div>
                    <div className="border-l border-white border-opacity-30 w-full h-full flex flex-col justify-center z-20">
                        <div className="h-[calc(50%-1px)] mx-auto w-full grid grid-cols-3 grid-rows-2">
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Eclipse.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Voltaic_Cyclosword.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Edge_of_Night.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Serylda's_Grudge.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Axiom_Arc.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full rounded-2xl scale-75 saturate-150" src="./items/Ionian_Boots_of_Lucidity.png" alt="" />
                            </div>
                        </div>
                        <hr className="w-full border-t border-white border-opacity-30" />
                        <div className="w-full h-1/2 mx-auto grid grid-cols-3 grid-rows-2">
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Malignance.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Horizon_Focus.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Rabadon's_Deathcap.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Zhonya's_Hourglass.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Cryptbloom.png" alt="" />
                            </div>
                            <div className="h-full aspect-square flex justify-center">
                                <img className="max-h-full animate-pulse rounded-2xl scale-75 saturate-150" src="./items/Sorcerer's_Shoes.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full z-20">
                        <div className="w-full h-full border-l border-white border-opacity-30 flex flex-col justify-around p-4">
                            <h5 className="text-center text-2xl font-bold">Configuration</h5>
                            <hr className="w-[69.9%] border-t border-white border-opacity-30 mx-auto" />
                            <br />
                            <p className="mx-auto text-slate-300 text-xl">AP / AD</p>
                            <div className="w-2/3 h-4 bg-slate-200 mx-auto rounded-xl relative overflow-hidden slider">
                                <div className="w-5 h-5 bg-gray-900 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-[0.12rem] shadow-[-100px_0px_0px_90px_rgb(24,34,42)]" />
                            </div>
                            <br />
                        </div>
                    </div>
                    <img className="z-10 opacity-50 aspect-square absolute right-1/2 top-1/2 translate-x-1/2 rotate-45 -translate-y-1/2 scale-125" src="chip.svg" alt="" />
                </div>
            </div>
        </div>
    );
}