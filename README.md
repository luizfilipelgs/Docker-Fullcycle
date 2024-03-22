# Desafios Docker - Full Cycle Rocks!

Este repositório contém as soluções para dois desafios práticos focados no uso de Docker, englobando conceitos de orquestração de contêineres, desenvolvimento de aplicações com Node.js, e construção de imagens leves com Go. Os desafios foram projetados para demonstrar a aplicação de técnicas de desenvolvimento e operações (DevOps), visando a criação de ambientes eficientes, escaláveis e isolados para desenvolvimento de software.

## Desafio 1: Proxy Reverso com Nginx, Node.js e MySQL

O primeiro desafio envolve a configuração de um ambiente Dockerizado onde o Nginx atua como um proxy reverso, direcionando requisições para uma aplicação Node.js. Esta aplicação, por sua vez, interage com um banco de dados MySQL, registrando informações e exibindo-as em uma página web. Este desafio destaca as habilidades em:

- Configuração de Nginx como proxy reverso.
- Desenvolvimento de aplicações web com Node.js.
- Integração com banco de dados MySQL.
- Uso de Docker Compose para orquestração de múltiplos contêineres.

### Executando o Desafio

Para colocar o ambiente em funcionamento, siga estes passos:

1. Navegue até a pasta do desafio no terminal:

2. Execute o seguinte comando para iniciar todos os serviços definidos no arquivo `docker-compose.yml` em modo "detached":

```bash
docker-compose up -d
```

Isso iniciará os contêineres do Nginx, Node.js e MySQL em segundo plano. O Nginx está configurado para atuar como um proxy reverso, direcionando as requisições recebidas na porta 8080 para a aplicação Node.js, que por sua vez interage com o banco de dados MySQL.

### Adicionando Novos Nomes ao Banco de Dados

A cada inicialização do servidor Node.js, um novo nome é automaticamente adicionado ao banco de dados MySQL, e a lista de nomes exibida na página web é atualizada.

### Visualizando a Lista de Nomes

Para visualizar a lista de nomes, abra um navegador e acesse:

```
http://localhost:8080
```

Você verá uma página web com a mensagem "Full Cycle Rocks!" seguida pela lista atualizada de nomes.

### Reiniciando os Serviços para Atualizar a Lista

Para adicionar mais nomes à lista e visualizar as atualizações, você pode reiniciar o serviço Node.js seguindo estes passos:

1. Pare os serviços em execução:

```bash
docker-compose down
```

2. Inicie os serviços novamente em modo "detached":

```bash
docker-compose up -d
```

A cada reinicialização, um novo nome é adicionado ao banco de dados, e a lista na página web refletirá essa atualização.


Aqui está um complemento revisado para o trecho do README do Desafio 2, incluindo todas as suas solicitações:

---

## Desafio 2: Imagem Docker Leve com Go

O segundo desafio se concentra na criação de uma imagem Docker extremamente leve para uma aplicação desenvolvida em Go. O principal objetivo é desenvolver uma imagem cuja execução resulte na exibição da mensagem "Full Cycle Rocks!!". Este desafio destaca a importância e a capacidade de otimização e eficiência na construção de imagens Docker, especialmente para aplicações desenvolvidas em linguagens compiladas como Go.

**Principais Aprendizados:**

- Desenvolvimento de Aplicações Simples em Go

- Construção de Imagens Docker Leves e Otimizadas

- Utilização de Multi-Staging Builds

- Publicação de Imagens no Docker Hub

### Resultados:

Conseguimos alcançar uma imagem final com o tamanho impressionante de **1.23MB**, bem abaixo do limite de 2MB estabelecido como meta para este desafio. Este resultado demonstra a eficácia das estratégias de otimização de imagem adotadas.

### Como Executar:

Você tem duas opções para executar a aplicação e visualizar a mensagem "Full Cycle Rocks!!". Essas instruções assumem que você tem o Docker instalado e configurado em sua máquina.

#### Opção 1: Construindo e Executando a Imagem Docker Localmente

1. **Clone o Repositório** (se ainda não o fez):

2. **Construa a Imagem Docker**:

    Substitua `nome_da_imagem` pelo nome que deseja dar à sua imagem Docker. Este comando deve ser executado no diretório raiz do projeto, onde o `Dockerfile` está localizado:

    ```bash
    docker build -t nome_da_imagem .
    ```

3. **Execute a Imagem**:

    ```bash
    docker run --rm nome_da_imagem
    ```

    Este comando inicia um container baseado na imagem que você acabou de construir, e a mensagem "Full Cycle Rocks!!" deverá ser exibida no terminal. A flag `--rm` assegura que o container seja automaticamente removido após a execução.


#### Opção 2: Baixando e Executando a Imagem Diretamente do Docker Hub

Se você preferir baixar e executar a imagem diretamente do Docker Hub sem construí-la localmente:

1. **Baixe a Imagem do Docker Hub**:

    Você pode baixar a imagem diretamente usando o seguinte comando. 

    Para a última versão, você pode simplesmente executar:

    ```bash
    docker pull luizfilipelgs/golang-fullcycle
    ```

2. **Execute a Imagem**:

    Após baixar a imagem, execute-a com o seguinte comando para ver a mensagem "Full Cycle Rocks!!":

    ```bash
    docker run --rm luizfilipelgs/golang-fullcycle
    ```

    Este comando inicia um container baseado na imagem especificada, e você deverá ver a mensagem exibida no terminal. A flag `--rm` assegura que o container seja automaticamente removido após a execução, mantendo seu sistema limpo.

Para mais informações e versões disponíveis, visite o repositório no Docker Hub:

[luizfilipelgs/golang-fullcycle no Docker Hub](https://hub.docker.com/r/luizfilipelgs/golang-fullcycle)


