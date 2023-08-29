import { FC, useState } from 'react';
import { FiFile } from 'react-icons/fi';

interface HeaderProps { }
type HeaderStateType = 'notes' | 'tasks';

const Header: FC<HeaderProps> = () => {
    const [headerState, setHeaderState] = useState<HeaderStateType>('notes');

    return (
        <header className='flex justify-center items-center gap-16 p-5'>
            <button>
                <FiFile className="w-8 h-8 stroke-gray-50 fill-dark_yellow" />
            </button>
            <button>
                <FiFile className={`w-8 h-8 ${headerState === 'notes' ? "stroke-gray-50 fill-dark_yellow" : "stroke-gray-600 fill-transparent"}`} />
            </button>
        </header>
    )
}
export default Header