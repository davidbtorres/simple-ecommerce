import { useEffect, useState } from "react";
import BannerItem from "./BannerItem";

const BannerSlider = ({ banners }: { banners: BannerData[] }) => {
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [banners.length]);


    return (
        <div className="m-4">
            <BannerItem banner={banners[currentBanner]} />
        </div>
    );
};

export default BannerSlider;