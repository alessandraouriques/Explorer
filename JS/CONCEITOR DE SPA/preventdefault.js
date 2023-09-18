/* 
01. Criamos as páginas html com a estrutura da nav, onde no href será colocado o / seguido
de como se chama a página e uma DIV onde serão carregados os conteúdos das outras páginas. 

02. No JS criamos uma function para parar o evento default da página
que é ao clicar nos <a> do nav redirecionar a página para as outras
páginas html que eu criei.

03. Adiciono essa function nos botões. 

04. Agora se faz o mapeamento, que é basicamente fazer a conexão
do nome do "href" que demos a cada <a> do <nav> com os htmls externos
que criamos para cada categoría do <nav>.
  Fazemos isso criando uma const com um nome e dentro dela um objeto
  onde temos o nome da propriedade (que é o mesmo do "href" escrito entre
  "aspas" quando o nome começa com / (barra) pois não é permitido que comece
  com uma barra o nome, e o valor de cada propriedade será o diretório
  onde se encontra a página html correspondente, entre aspas também.
  OBS: Para acessar essas propriedades não poderá mais ser feito pelo 
  método tradicional como "routes.about", tem que ser pelo método
   routes["/about"] pois começa em / o nome 
   
05. Agora dentro de uma function de nome hadle(), dentro da function 
fazemos uma nova variábel usando "pathname" que é uma propriedade
de outra propriedade chamada "location" que serve para retornar o 
caminho (path) e o nome do arquivo da página atual.
  Fica assim: 

    ->  const pathname = window.location.pathname

  Mas pode ser escrito assim também, de forma desestruturada:

    ->  const { pathname } = window.location

    Basicamente o que acontece aqui é que ele manda buscar o que está dentro
    das chaves {} dentro das propriedades do ".location" e voltar a atribuir
    ele mesmo como o nome e resultado da constante. Pode e deve ser usado quando temos de 
    usar vários ao mesmo tempo como: { pathname, href, port } que são todos
    propriedades do ".location", sempre separado por vírgulas.

06. Agora aplicamos a handle() com o path de cada página dentro da function "route()"
e adicionamos mais uma linha de código que serve para colocar o href no histórico do browser
para demonstrar em qual página nos encontramos:
    
    -> window.history.pushstate({}, "", event.target.href)

    dentro do "pushstate" se colocar primeiro um dado (de qualquer tipo, então
    pode ser um objeto vazio), segundo uma string (que pode ser vazia), e no terceiro uma URL,
    neste caso o "href" do "target" que neste caso é cada <a> do <nav> que é
    clicado. 
*/

  

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const error = document.querySelector("#error");

const routes = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html",
}

function route(event) {
  event = event || window.event //verificação se eu passei um evento, se não passei pega o evento geral da janela = window.event (que sería no caso redirecionar)
  event.preventDefault() // evito o padrão de redirecionar quando o <a> tem um href 

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location
}

home.addEventListener('click', route())

