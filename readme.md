# 🛒 Carrinho de Compras da Shopee

Bem-vindo ao projeto **Carrinho de Compras da Shopee**! Este é um sistema simplificado que simula o funcionamento de um carrinho de compras, inspirado na experiência de usuário oferecida pela Shopee. Aqui, os itens são armazenados e os cálculos são realizados automaticamente para oferecer praticidade ao usuário.

---

## 🎯 Objetivo

O objetivo deste projeto é criar um sistema funcional de carrinho de compras que:

- **Armazene itens selecionados pelos usuários.**
- **Realize o cálculo automático de subtotais.**
- **Ofereça funcionalidades essenciais para o gerenciamento de um carrinho de compras.**

---

## 📂 Domínio da Aplicação

A aplicação está focada no domínio de **carrinho de compras**.

### 🛠️ Funcionalidades Principais:

1. **Adicionar itens ao carrinho.**
2. **Remover itens do carrinho.**
3. **Calcular subtotais automaticamente.**
4. **Exibir informações detalhadas sobre os itens adicionados.**

---

## 📦 Estrutura do Projeto

### 📋 Entidades Representadas:

- **Carrinho:** Representado pelo arquivo [`cart.js`](./services/cart.js).
- **Itens:** Representados pelo arquivo [`item.js`](./services/item.js).

### 🗂️ Organização dos Arquivos:

```plaintext
├── services
│   ├── cart.js        # Implementação da lógica do carrinho de compras.
│   ├── item.js        # Estrutura e operações relacionadas aos itens.
└── README.md          # Documentação do projeto.
```

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:

```bash
 git clone https://github.com/dmm76/shopee-cart-challenge.git
```

2. Navegue até o diretório do projeto:

```bash
 cd ./src/index.js
```

3. Instale as dependências necessárias:

```bash
 npm install -y
```

4. Execute o projeto:

```bash
 node ./src/index.js
```
ou 
```bash
 node --watch ./src/index.js
```

---

## 🖼️ Demonstração

![image](https://github.com/user-attachments/assets/44e9d2d1-a533-4085-b565-a7541afc90ae)


---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:

```bash
 git checkout -b feature/nova-funcionalidade
```

3. Faça suas alterações e comite:

```bash
 git commit -m "Adiciona nova funcionalidade"
```

4. Envie suas alterações:

```bash
 git push origin feature/nova-funcionalidade
```

5. Abra um Pull Request para análise.

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [`LICENSE`](./LICENSE) para mais detalhes.

---

## 🧑‍💻 Desenvolvedor

Desenvolvido por [Douglas](https://github.com/dmm76). Sinta-se à vontade para entrar em contato e dar sugestões! 🚀
