import './style.css'

export default function BtnDividir({ text, onClick }) {
    return (
        <button className="btn-dividir" onClick={onClick}>
            {text}
        </button>
    )
}