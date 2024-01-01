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