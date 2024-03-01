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

```bash
cd Desafio\ nginx\ node
```

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


## Desafio 2: Imagem Docker Leve com Go

O segundo desafio foca na criação de uma imagem Docker extremamente leve para uma aplicação desenvolvida em Go. O objetivo é construir uma imagem que, ao ser executada, exiba a mensagem "Full Cycle Rocks!!", demonstrando a capacidade de otimização e eficiência na construção de imagens Docker. Este desafio ilustra:

- Desenvolvimento de aplicações simples em Go.
- Construção de imagens Docker leves e otimizadas.
- Publicação de imagens no Docker Hub.

## Tecnologias e Conceitos Aplicados

- **Docker e Docker Compose:** Ferramentas essenciais para criar, executar e orquestrar contêineres, facilitando a replicação de ambientes e a integração contínua.
- **Nginx:** Utilizado como proxy reverso, demonstrando práticas de configuração para otimizar o desempenho e a segurança das aplicações.
- **Node.js e MySQL:** Combinação de tecnologias para desenvolvimento de aplicações web dinâmicas, abordando conceitos de CRUD e interações com banco de dados.
- **Go (Golang):** Foco na eficiência e simplicidade para desenvolvimento de software, além de práticas para minimizar o tamanho das imagens Docker.

Este projeto visa não apenas cumprir com os requisitos técnicos dos desafios propostos, mas também demonstrar boas práticas de desenvolvimento e operações, enfatizando a importância da eficiência, escalabilidade e facilidade de manutenção em ambientes Dockerizados.
