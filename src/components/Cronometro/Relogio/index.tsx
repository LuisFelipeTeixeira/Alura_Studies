import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined;
}

export default function Relogio ({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutosUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundosUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutosUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}