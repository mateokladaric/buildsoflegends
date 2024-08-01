"use client";
import { useState, useEffect } from "react";

export default function Slider(props: { title: string, changeValue: any}) {
    const [sValue, setValue] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        updateSliderValue(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            updateSliderValue(e);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updateSliderValue = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
        const sliderWidth = e.currentTarget?.clientWidth;
        const clickX = e instanceof MouseEvent ? e.clientX : e.nativeEvent.clientX;
        const offsetX = clickX - e.currentTarget?.getBoundingClientRect().left;
        let newValue = (offsetX / sliderWidth) * 100;
        if (newValue < 0) newValue = 0;
        if (newValue > 100) newValue = 100;
        setValue(newValue);
        props.changeValue(newValue);
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div className="flex flex-col justify-middle items-center">
            <p className="mx-auto text-slate-300 text-xl">{props.title}</p>
            <div
                className="w-full h-4 bg-slate-200 mx-auto rounded-xl relative overflow-hidden slider"
                onMouseDown={handleMouseDown}
            >
                <div
                    className="w-5 h-5 bg-gray-900 rounded-full absolute -translate-x-1/2 -translate-y-[0.12rem] shadow-[-120px_0px_0px_105px_rgb(24,34,42)]"
                    style={{ left: `${sValue}%` }}
                />
            </div>
        </div>
    );
}
