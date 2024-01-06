# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CSS Modules

- Módulos CSS não interagem com os elementos fora do componente o qual estão alocados. Seu arquivo é criado seguindo o exemplo: Header.module.css e sua estrutura é feita de classes e não id's. No inspect elements ao inspecionar a classe css feita utilizando a técnica de CSS Módulos é notado que ao invez do nome da classe aparece uma Hash (hexadecimal), ou seja, aquela classe pertence apenas a aquela tag ...entenda como algo amarrado.

Notas:

- box-sizing: border-box --> quando a tela é reduzida, não expande ou vaza ele espreme o conteudo interno

1rem = 16px


## Key no React
Por que unica?
3 momentos em que um componente é renderizado no react
* - Quando um estado altera, todo o componente é executado (lido) novamente
* - Quando a propriedade altera
* - Quando um componente PAI renderiza ( filho ta abaixo do PAi, logo vai toda tripa ser renderizada novamente )

Quando a tela é renderizada e possui uma lista, ele compara as unique keys atuais com as antigas, e então só vai renderizar oq vier de novo

não usar o index do map --> alteracao de posicoes de uma lista (reoordenacao por exemplo, ele renderiza componente todo denovo, mas nao foi nada adicionado de novo) ---PESSIMO

# CLOSURES

```js
function Comment(){
  const [likes, setLikes]= useState(0)

  function addLike(){
    setLikes(likes +1)
    setLikes(likes +1)
  }
}
```
valores atualizados nao funcionam para usar da forma acima. precisamos armazenar o novo valor e assim somar novamente

```js
function Comment(){
  const [likes, setLikes]= useState(0)

  function addLike(){
    const newSetlike = likes + 1
    setLikes(newSetlike)
    setLikes(newSetlike + 1)
  }
}
```

OUU

## JEITO CERTO

```js
function Comment(){
  const [likes, setLikes]= useState(0)

  function addLike(){
    setLikeCount((likeState)=>{
      return likeState +1
    })
    setLikeCount((likeState)=>{
      return likeState +1
    })
  }
}
```
## JEITO CERTO
SEMPRE Que for atualizar uma informação , depende dela mesmo
é sempre legal fazer o padrão de funções