import style from "./navbar.module.scss";
import { FiPenTool } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';

export default function Navbar(){

    return(
        <div className={style.container}>
            <ul>
                <li><FiPenTool className={style.logo} /></li>
                <li><h1>Fast Typer</h1></li>
                <li><BiUserCircle className={style.user}/></li>
            </ul>         
        </div>
    )
}