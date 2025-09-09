import icons from '@/constants/icons';
import Image from 'next/image';
import Link from 'next/link';

interface ILogo {
  height?: number;
  width?: number;
}

const Logo = ({ height = 40, width = 40 }: ILogo) => {
  return (
    <Link href={'/'}>
      <Image src={icons.logo} height={height} width={width} alt="Logo" />
    </Link>
  );
};

export default Logo;
