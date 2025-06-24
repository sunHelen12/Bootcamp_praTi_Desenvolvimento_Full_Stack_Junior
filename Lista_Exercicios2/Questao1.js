/**
 * 1. Validação de Datas​
 * Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
 * formarem uma data real (meses de 28–31 dias, ano bissexto para
 * fevereiro) e false caso contrário.
*/

function ehDataValida(dia, mes, ano){

    if (mes < 1 || mes > 12){
        return false;
    }

    const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // para todos os dias do mês

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0)|| (ano % 400 === 0);

    if (mes === 2 && bissexto){
        diasDoMes[1] = 29;
    }

    if (dia < 1 || dia > diasDoMes[mes - 1]){
        return false;
    }

    return true;
}

console.log(ehDataValida(29,2,1988));
console.log(ehDataValida(16,5,2001));
console.log(ehDataValida(16,13,2001));
console.log(ehDataValida(7,-1,1999));