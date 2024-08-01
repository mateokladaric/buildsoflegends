"use client";
import Item from "./Item";
import ChampionIcon from "./ChampIcon";
import Slider from "./Slider";
import { useSession } from "next-auth/react";

export default function Content(props: {setUserChampion: any, setEnemyChampion: any, setFirstItem:any, setSecondItem:any, setThirdItem:any, setFourthItem:any, setFifthItem:any, setSixthItem:any, getServerBuild:any, setUserAPAD:any, userItems:any}) {
    const { data: session } = useSession();

    return (
        <div className="w-full h-full bg-[rgb(25,25,25)] rounded-b-xl grid grid-cols-[6fr_1fr] shadow-xl overflow-hidden">
            <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1vw_1vw] rounded-b-xl grid grid-cols-[1fr_2fr_1fr_2fr]">
                <div className="border border-white border-opacity-20 rounded-bl-xl flex items-center">
                    <ChampionIcon setCurrentChamp={props.setUserChampion} color="red" />
                </div>
                <div className="w-full h-full p-4 border border-l-0 border-white border-opacity-20 grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr]">
                    <Item hideName={false} changeItem={props.setFirstItem} />
                    <Item hideName={false} changeItem={props.setSecondItem} />
                    <Item hideName={false} changeItem={props.setThirdItem} />
                    <Item hideName={false} changeItem={props.setFourthItem} />
                    <Item hideName={false} changeItem={props.setFifthItem} />
                    <Item hideName={false} changeItem={props.setSixthItem} />
                </div>
                <div className="border border-white border-l-0 border-opacity-20 flex items-center">
                    <ChampionIcon setCurrentChamp={props.setEnemyChampion} color="blue" />
                </div>
                <div className="w-full h-full p-4 border border-x-0 border-white border-opacity-20 grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr]">
                    {
                        props.userItems.map((item: string, index: number) => {
                            return <Item key={index} hideName={true} src={item} />
                        })
                    }
                </div>
            </div>
            <div className="w-full h-full bg-[rgb(20,20,20)] rounded-br-xl">
                <div className="w-full h-full border-l border-white border-opacity-30 grid grid-rows-[50px_repeat(1fr)] justify-middle p-4">
                    <div className="flex flex-col justify-middle items-center">
                        <h5 className="text-center text-2xl font-bold">Configuration</h5>
                        <hr className="w-[69.9%] border-t border-white border-opacity-30 mx-auto" />
                    </div>
                    <Slider title="AP / AD" changeValue={props.setUserAPAD} />
                    <div className="flex flex-col justify-middle items-center">
                        <button onClick={() => props.getServerBuild(session)} className="px-8 py-3 border-2 border-white border-opacity-30 rounded-full">Get Build</button>
                    </div>
                </div>
            </div>
        </div>
    )
}