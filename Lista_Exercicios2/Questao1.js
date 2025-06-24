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
    

}