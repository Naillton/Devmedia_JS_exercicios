import chuvasDeMeteoros from './data/chuvas-de-meteoros.js'
import imprimeListaChuva from './funcoes/funcoesInterface.js'

const dataAtual = new Date();

const chuvasVisiveis = chuvasDeMeteoros.filter( (chuva) => {
  const anoAtual = dataAtual.getFullYear();

  const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
  const dataFim = new Date(chuva.fim + '/' + anoAtual);

  if(dataInicio.getMonth() > dataFim.getMonth() ){
    const anoFinal = dataFim.getFullYear();
    dataFim.setFullYear(anoFinal + 1);
  }

  return ( dataAtual >= dataInicio && dataAtual <= dataFim)
});

const proximaChuva = chuvasDeMeteoros.filter( (chuva) => {
  const dt = dataAtual
  const anoAtual = dt.getFullYear();
  const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
  const dataFim = new Date(dt);

  if(dt.getMonth() > dataInicio.getMonth() ){
    const anoFinal = dataInicio.getFullYear();
    dataInicio.setFullYear(anoFinal + 1);
  }

  dataFim.setMonth( dataFim.getMonth() + 2);

  return (dataInicio > dt && dataInicio < dataFim)
});

console.log('Chuva de meteoros');

if(chuvasVisiveis.length > 0){
  let msg = "\nEncontramos ";
  msg += chuvasVisiveis.length == 1 ? '1 chuva de meteoros' : chuvasVisiveis.length + ' chuvas e meteoros';

  console.log(msg);
  imprimeListaChuva(chuvasVisiveis)
}else{
  console.log("\nNenhuma chuva de meteoros passando no momento");
}
console.log("\n\nNao perca as proximas chuvas de meteoros:");
imprimeListaChuva(proximaChuva)