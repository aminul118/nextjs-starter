import icons from '@/config/icons';
import Image from 'next/image';
import Link from 'next/link';

interface ILogo {
  height?: number;
  width?: number;
  className?: string;
}

const Logo = ({ height = 40, width = 40, className }: ILogo) => {
  return (
    <Link href={'/'}>
      <Image
        className={className}
        src={icons.logo}
        height={height}
        width={width}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
