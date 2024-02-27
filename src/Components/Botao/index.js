import './style.css';

export default function Botao({text, onClick}) {
    return(
        <button className='btn' onClick={onClick}>
            <span className='text' >{text}</span>
        </button>
    )
}