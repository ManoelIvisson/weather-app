export function formatarDataAtual(): string {
    const data = new Date()

    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ]

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    const diaAtual = dias[data.getDay()]
    const dataAtual = data.getDate()
    const mesAtual = meses[data.getMonth()]

    return `${diaAtual}, ${dataAtual} de ${mesAtual}`
}