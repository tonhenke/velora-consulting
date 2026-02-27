import logoImage from '../assets/velora-logo.png';

const Logo = () => {
    return (
        <div className="flex items-center gap-3 select-none">
            <img src={logoImage} alt="Velora Growth Engineers" className="h-12 w-auto object-contain" />
        </div>
    );
};

export default Logo;
