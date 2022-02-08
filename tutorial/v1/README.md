## INTRODUÇÃO

Programar sem o auto complete pode ser uma tarefa tediosa e improdutiva, por isso que o Inter complete foi criado. O Inter complete dá ao VSCODE a capacidade de auto completar a sintaxe do Inter e da Interfy. 

## INSTALAÇÃO

Paara instalar o Inter complete você precisa ter os seguintes requisitos:

*	Ter o VSCODE instalado e saber trabalhar com ele.
*	Ter o Nodejs instalado e saber rodar um programa em Node.
*	Ter o Winrar instalado e saber trabalhar com ele.

Tens os requisitos necessário? Então a última coisa que falta é baixares o Inter complete! Para baixar o Inter complete clica em [baixar](https://github.com/interjs/inter-complete/releases/download/v1.0.0/inter-complete.zip), vai baixar um arquivo zip, e você usará o Winrar para extrair a pasta inter-complete, na referida pasta terá dois arquivos, eles são:

#### index.ts
 Nesse arquivo tem as declarações da sintaxe do Inter.

Cria um arquivo com a extensão `js`, e importa a declaração da sintaxe do Inter da seguinte forma:

```js
import { toHTML, Inter, template }  from "./inter-complete/index";

```

E quando você usar uma das seguintes `funções` importadas, o VSCODE vai auto completar a sua sintaxe. Por exemplo, no `toHTML`, quando você passar o objeto como o seu argumento, o VSCODE vai auto completar/sugerir quando você digitar o nome de uma propriedade válida no objeto que é passado como o argumento da função toHTML, e as sugestões estarão documentadas, ou seja, o Inter complete vai dizer para que serve aquilo.

#### parser.js

Você nunca vai usar (no navegador) os arquivos que importam as declarações da sintaxe do Inter, esses arquivos serão apenas um `development-only`(arquivos apenas para desenvolvimento), então quais são os arquivos que serão usados no navegador? O parser vai gerar esses arquivos sem os `imports`. Quando você quiser gerar os arquivos que serão usados no navegador, você deve criar um arquivo JSON chamado `config.json`, o config aceita as seguintes opções:

* inputDir => Indica o caminho para diretório onde os arquivos  que importam as declarações de sintaxe do Inter estão localizados, é recomendado que uses sempre caminhos absolutos.
* outPutDir => Indica o caminho para o diretório onde os arquivos que vais usar no navegador estarão localizados, é recomendado que uses sempre caminhos absolutos.
* target => Deve ser uma array de string, e cada string deve indicar o nome do arquivo Javascript que importa a declaração da sintaxe do Inter e que pretendes que seja compilado para que possa ser importado numa tag script. Normalmente esses arquivos serão produzidos com a sub extensão browser, por exemplo: inter.browser.js
* subExt => Como o nome o descreve, essa opção diz para o parser que nós queremos que o nosso arquivo tenha uma sub extensão customizada, ao invés o browser, será o que você definir com essa opção.
* comment => Os arquivos produzidos terão comentário bem no topo do código, esse comentário será útil, porque diz qual é o caminho do arquivo original(que tem as declarações de sintaxe), para remover o comentário basta definir essa opção para false.

Para gerar os arquivos que serão usados no navegador, configura o Parser com o config.json e rode o arquivo parser.js com o node, o arquivo config.json e o parser.js devem estar no mesmo diretório.
Agora estás prontos para usar o Inter complete! Qualquer dúvida abra uma issue descrevendo a tua dúvida.


