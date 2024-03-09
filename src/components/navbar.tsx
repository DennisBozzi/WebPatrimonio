import ceetLogo from '../assets/images/ceetLogo.png';
import { LeftSheet } from './leftSheet';
import { Input } from "../components/ui/input"


function NavBar() {

    return (
        <div className='flex p-2 gap-2'>
            <LeftSheet />

            <Input></Input>

            


        </div>
    )
}


export default NavBar;