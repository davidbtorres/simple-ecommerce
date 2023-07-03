import BannerSlider from '../components/BannerSlider';
import banners from '../constants/banners';

export function Home() {
    return (
        <>
            <BannerSlider banners={banners} />
        </>
    )
}