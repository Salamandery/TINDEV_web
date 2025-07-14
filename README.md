<div align="center">

  # TINDEV_WEB
  
  <p>
    <img src="https://img.shields.io/badge/React-16.8.6-blue?logo=react" />
    <img src="https://img.shields.io/badge/Axios-0.19.0-5A29E4?logo=axios" />
    <img src="https://img.shields.io/badge/license-MIT-green" />
  </p>
  
  <h3>Aplicação web inspirada no Tinder, para interação entre desenvolvedores via GitHub.</h3>
</div>

---

## 📑 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Padrões de Projeto](#padrões-de-projeto)
- [Configuração e Setup](#configuração-e-setup)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Autor](#-autor)

---

## 💡 Sobre o Projeto

Aplicação web que permite aos usuários logar com seu usuário do GitHub, visualizar outros desenvolvedores e interagir com curtidas ou não curtidas, semelhante ao Tinder, mas para devs.

---

## 🚀 Tecnologias Utilizadas

- **React** 16.8.6 (com hooks funcionais)
- **React Router DOM** 5.0.1 (roteamento SPA)
- **Axios** 0.19.0 (requisições HTTP)
- **React Scripts** 3.0.1 (scripts do Create React App)

---

## 🧩 Padrões de Projeto

- **Componentes Funcionais**: Utilização de hooks (`useState`, `useEffect`) para gerenciamento de estado e efeitos colaterais.
- **Separação de responsabilidades**: API centralizada em `src/api/nodejs.js`.
- **Roteamento SPA**: Definido em `src/routes.js` usando `BrowserRouter` e `Route`.
- **Modularização**: Cada view/component possui seu próprio diretório e estilos.

---

## ⚙️ Configuração e Setup

1. **Pré-requisitos:**
   - Node.js >= 10.x
   - npm >= 6.x

2. **Instalação:**
   ```bash
   npm install
   ```

3. **Configuração da API:**
   - Edite o arquivo `src/api/nodejs.js` para apontar o `baseURL` para o backend desejado:
     ```js
     const api = axios.create({
         baseURL: 'http://SEU_BACKEND/',
     });
     ```

4. **Rodando o projeto:**
   ```bash
   npm start
   ```
   O app estará disponível em `http://localhost:3000`.

---

## 💻 Como Usar

1. Informe seu usuário do GitHub na tela de login.
2. Navegue pelos perfis de outros devs.
3. Clique em **Sim** para curtir ou **Não** para recusar.

---

## 📁 Estrutura de Pastas

```
TINDEV_web/
├── src/
│   ├── api/           # Configuração do Axios
│   ├── views/
│   │   ├── login/     # Tela de login
│   │   └── main/      # Tela principal
│   ├── routes.js      # Definição das rotas
│   ├── App.js         # Componente principal
│   └── index.js       # Ponto de entrada
└── ...
```

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>

