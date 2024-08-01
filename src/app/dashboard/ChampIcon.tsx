"use client";
import { useState } from "react";

export default function cIcon(props: { setCurrentChamp: any, color?: string }) {
    const [champ, setChamp] = useState("");
    const champList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "ChoGath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "KaiSa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "KhaZix", "Kindred", "Kled", "KogMaw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "VelKoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];

    function getClosest(name:string) {
        for (let i = 0; i < champList.length; i++) {
            if (champList[i].toLowerCase().includes(name.toLowerCase()))
                return champList[i];
        }
        return "";
    }

    function setChampion(name:string) {
        setChamp(getClosest(name));
        props.setCurrentChamp(getClosest(name));
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <p className="w-2/3 mx-auto text-center mb-1">Champion Name</p>
            <input className="w-2/3 mb-6 mx-auto rounded-full bg-transparent backdrop-blur-md border text-white text-center" onChange={(event) => setChampion(event.target.value)} placeholder="Aatrox" type="text" />
            <div className={`w-1/2 p-1 overflow-hidden aspect-square mx-auto rounded-full bg-gradient-to-br from-${props.color}-500 to-${props.color}-900 shadow-[0px_0px_20px_2px_${props.color}}]`}>
                <img className="rounded-full" alt="" src={champ.length > 0 ? ("./champions/" + getClosest(champ) + "_0.jpg") : ("qm.svg")} />
            </div>
        </div>
    )
}