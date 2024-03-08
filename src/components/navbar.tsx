import ceetLogo from '../assets/images/ceetLogo.png';
import { SheetSide } from './leftSheet';



function NavBar() {
    return (
        <div className="fixed min-h-fit bg-sky-950 inset-x-0 top-0 text-white">
            <div className="grid gap-8 items-center max-w-lg mx-auto py-2">

                <SheetSide />
                <img className='mx-auto' src={ceetLogo} width={48} />

            </div>
        </div>)
}


export default NavBar;