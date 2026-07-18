import React, { FC } from "react"

export const YoutubePlayer: FC<{
    youtubeUrl: string;
}> = ({ youtubeUrl }) => {

    const Url = youtubeUrl.replace("watch?v=", "embed/").split("&")[0];

    return (
        <div className={`relative w-[100%] pb-[56.25%]`}>
            <iframe className="absolute top-0 left-0 w-[100%] h-[100%] border-0" src={Url} allowFullScreen></iframe>
        </div>
    )
}
