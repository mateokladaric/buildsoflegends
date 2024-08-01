"use client";
import React, { useState } from 'react';
import Content from './ItemsContent';
import { getBuild } from "./getBuild";
import { SessionProvider } from 'next-auth/react';

export default function Tab() {
    const [userChamp, setUserChamp] = useState<string>(''); // Initialize userChamp state with ''
    const [enemyChamp, setEnemyChamp] = useState<string>(''); // Initialize enemyChamp state with ''
    const [firstItem, setFirstItem] = useState<string>(''); // Initialize firstItem state with ''
    const [secondItem, setSecondItem] = useState<string>(''); // Initialize secondItem state with ''
    const [thirdItem, setThirdItem] = useState<string>(''); // Initialize thirdItem state with ''
    const [fourthItem, setFourthItem] = useState<string>(''); // Initialize fourthItem state with ''
    const [fifthItem, setFifthItem] = useState<string>(''); // Initialize fifthItem state with ''
    const [sixthItem, setSixthItem] = useState<string>(''); // Initialize sixthItem state with ''
    const [userAPAD, setUserAPAD] = useState<number>(0); // Initialize userAPAD state with 0
    const [userItems, setUserItems] = useState<string[]>([]); // Initialize userItems state with an empty array of strings

    const getServerBuild = () => {
        var enemyItems = [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem];

        getBuild(enemyItems, userItems, userChamp, enemyChamp, userAPAD).then((response) => {
            setUserItems([...response, ...userItems]);
        });
    }

    return (
        <div className="w-full pt-4 h-full bg-[rgb(15,15,15)] rounded-t-xl">
            <SessionProvider>
                {
                    <Content setUserChampion={setUserChamp} setEnemyChampion={setEnemyChamp} setFirstItem={setFirstItem} setSecondItem={setSecondItem} setThirdItem={setThirdItem} setFourthItem={setFourthItem} setFifthItem={setFifthItem} setSixthItem={setSixthItem} getServerBuild={getServerBuild} setUserAPAD={setUserAPAD} userItems={userItems} />
                }
            </SessionProvider>
        </div>
    )
}