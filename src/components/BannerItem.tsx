import { Link } from 'react-router-dom';

type BannerItemProps = {
    banner: BannerData;
};

const BannerItem: React.FC<BannerItemProps> = ({
    banner,
}) => {


    const query = encodeURIComponent(JSON.stringify(banner.category));

    return (
        <Link to={`${banner.link}?data=${query}`}>
            <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
            >
                <div
                    className={`absolute inset-0 black opacity-80`}
                    style={{ mixBlendMode: 'multiply' }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    {banner.text}
                </div>
            </div>
        </Link>
    );
};

export default BannerItem;
