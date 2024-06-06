"use client";
import { Gallery } from "@/components/Gallery";
import { ImageList } from "@/data/ImageList";

const Page = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-16">
            <h1 className="pt-16 text-4xl">Galactic Gallery</h1>
            <Gallery images={ImageList} />
            </div>
        </div>
    )
}


export default Page