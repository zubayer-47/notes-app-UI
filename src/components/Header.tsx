import { FC } from 'react';
import { FiFile } from 'react-icons/fi';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    return (
        <header className='flex justify-center items-center gap-16 p-5'>
            <div>
                <FiFile className="w-8 h-8 stroke-gray-50 fill-yellow-500" />
            </div>
            <div>
                <FiFile className="w-8 h-8 stroke-gray-50 fill-yellow-500" />
            </div>
        </header>
    )
}
export default Header