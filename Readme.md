# List_Music - Frontend de Gerenciamento de Músicas🎵

[![License](https://img.shields.io/github/license/Samyr-Dev/List_Music)](https://github.com/Samyr-Dev/List_Music/blob/main/LICENSE)
[![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular&logoColor=white)](https://angular.dev/)

Este repositório contém a interface web desenvolvida em **Angular 18** para o gerenciamento e listagem de músicas. O projeto é a parte visual de uma aplicação Full Stack, integrada a uma API REST em Node.js com banco de dados MongoDB.

---

## 🎨 Melhorias Implementadas

Neste desafio, foquei em elevar a qualidade técnica e a usabilidade (UX) do projeto original:

* **Feedback ao Usuário (UX)**: Implementação de avisos visuais via `MatSnackBar` (Angular Material). Agora, erros de integração como o **409 Conflict** (música duplicada) são informados através de alertas no topo da tela, em vez de apenas logs no console.
* **Ajuste de Fluxo e Validação**: A `data de registro` foi tornada opcional no formulário para garantir flexibilidade no cadastro, alinhando o comportamento do Frontend com as regras de negócio do Backend.
* **Interface Responsiva**: Refatoração completa do CSS para os campos de entrada de dados, garantindo que o layout seja intuitivo e visualmente atrativo em diferentes resoluções.
* **Conectividade Estável**: Ajuste na URL base dos serviços para garantir a comunicação estável entre o ambiente de desenvolvimento local e a API.

---

## ⚙️ Pré-requisitos e Instalação

Para rodar este projeto, você precisará ter o **Node.js** (v18 ou superior) instalado em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Samyr-Dev/List_Music.git](https://github.com/Samyr-Dev/List_Music.git)
    cd List_Music
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Inicie a aplicação:**
    ```bash
    ng serve
    ```
    Acesse o projeto em seu navegador através do endereço: `http://localhost:4200/`

---

## ⚠️ Atenção: Integração Necessária

Este projeto depende da execução da API de Backend para realizar a listagem e o cadastro das músicas.
🔗 **Repositório do Backend:** [Clique aqui para acessar o Backend](https://github.com/Samyr-Dev/Backend_Music)

---

## 🧑‍💻 Autor

**Samyr Silva Tertuliano Deusdará**
*Estudante de Engenharia de Software | Entusiasta em Tecnologia*

* [LinkedIn](https://www.linkedin.com/in/samyrtertuliano)
* [GitHub](https://github.com/Samyr-Dev)
