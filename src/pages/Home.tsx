import BannerSlider from '../components/BannerSlider';
import banners from '../constants/banners';

export function Home() {
    return (
        <div className='ml-10 mr-10'>
            <BannerSlider banners={banners} />
        </div>
    )
}