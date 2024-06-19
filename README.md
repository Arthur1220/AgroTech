# Tutorial para Instalação do Node.js, EJS e MySQL - Ubuntu

## Instalação do Node.js

1. **Instale o Node.js (versão LTS):**
    ```sh
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

2. **Verifique a instalação do Node.js e npm:**
    ```sh
    node -v
    npm -v
    ```

## Configuração do Projeto

1. **Instalar as dependências do projeto:**
    ```sh
    npm install
    ```

2. **Iniciar o servidor:**
    ```sh
    npm start
    ```

## Configuração do Banco de Dados

1. **Instalar o MySQL Server:**
    ```sh
    sudo apt update
    sudo apt install mysql-server
    ```

2. **Acessar o MySQL:**
    ```sh
    sudo mysql -u root -p
    ```

3. **Criar o banco de dados:**
    ```sql
    CREATE DATABASE meu_banco_de_dados;
    ```

4. **Configurar o usuário root do MySQL:**
    ```sql
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui';
    ```

## Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="sua_senha_aqui"
DB_NAME=meu_banco_de_dados
PORT=3000
```

## Scripts npm

Existem duas opções para rodar o projeto:

1. **start**: Inicialização padrão do sistema.
    ```sh
    npm start
    ```

2. **startLive**: Inicialização com live-reload. Qualquer mudança feita no sistema será refletida instantaneamente ao atualizar a página.
    ```sh
    npm run startLive
    ```

Pronto! Seu ambiente está configurado para desenvolvimento com Node.js, EJS e MySQL.