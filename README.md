# Sistema de Produtos

## ✅ Introdução

Este projeto consiste em uma aplicação fullstack desenvolvida como parte de um desafio técnico. O sistema tem como objetivo realizar o gerenciamento de produtos e categorias, com funcionalidades completas de CRUD.

A stack utilizada inclui:

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [NestJS](https://nestjs.com/)
- **Banco de Dados**: PostgreSQL
- **Cache**: Redis
- **Infraestrutura**: Docker e Docker Compose

## ⚙️ Fluxogramas

### Diagrama C4 - Contexto

## ![Diagrama C4 - Contexto](docs/C4%20-%20Context.png)

### Diagrama C4 - Containers

## ![Diagrama C4 - Containers](docs/C4%20-%20Containers.png)

## ⚙️ Tecnologias Utilizadas

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend

- NestJS
- TypeScript
- Swagger (Documentação da API)
- Prisma ORM

### Infraestrutura

- Docker
- Docker Compose
- PostgreSQL
- Redis

---

## 🗂️ Estrutura do Projeto

```bash
/
├── frontend        # Aplicação Next.js
├── backend         # API NestJS
├── infra           # Arquivos de infraestrutura (Docker, scripts, etc.)
├── docs            # Documentação e diagramas
└── .env            # Variáveis de ambiente para docker-compose
```

---

## 🔐 Variáveis de Ambiente

### 📌 Para executar os serviços separadamente:

Crie um arquivo `.env` na raiz de cada pasta (`frontend`, `backend`, etc.) com as variáveis adequadas.

#### Frontend

```env
NEXT_PUBLIC_BACKEND_API=""
```

#### Backend

```env
DATABASE_URL=""
REDIS_URL=""
```

### 📦 Para executar via Docker Compose:

Use o arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DB="admin"
DATABASE_URL=""

REDIS_URL=""
NEXT_PUBLIC_BACKEND_API=""
```

---

## 🚀 Como Executar o Projeto

### Subir os serviços

#### Docker Compose

```bash
docker compose --env-file .env -f infra/infrastructure.yml up -d
```

#### Manual

- Backend

```bash
cd backend && npm run start:dev
```

- Frontend (Porta 4001)

```bash
cd frontend && npm run dev
```

### 2. Inicializar o banco de dados

Execute o script para criação das tabelas e criação de registros para teste (seed)

```bash
./infra/database.sh
```

---

## 📡 Endpoints Disponíveis

[Backend - Swagger](http://localhost:3000/api/docs)

### `/products`

- `GET /products` — Lista todos os produtos.
- `GET /products/:id` — Detalha um produto por ID.
- `POST /products` — Cria um novo produto.
- `PUT /products/:id` — Atualiza um produto existente.
- `DELETE /products/:id` — Remove um produto.

### `/categories`

- `GET /categories` — Lista todas as categorias.
- `GET /categories/:id` — Detalha uma categoria por ID.
- `POST /categories` — Cria uma nova categoria.
- `PUT /categories/:id` — Atualiza uma categoria existente.
- `DELETE /categories/:id` — Remove uma categoria.

---

## 🧩 Serviços e Portas

| Serviço    | Porta | URL de Acesso                                          |
| ---------- | ----- | ------------------------------------------------------ |
| Frontend   | 4000  | [http://localhost:4000](http://localhost:4000)         |
| Backend    | 3000  | [http://localhost:3000/api](http://localhost:3000/api) |
| Redis      | 6379  | —                                                      |
| PostgreSQL | 5432  | —                                                      |

---

## 🧠 Cache

### Técnica Utilizada: **Cache-Aside (Lazy-Loading)**

Neste projeto, foi implementado um sistema de cache utilizando a estratégia **Cache-Aside**, também conhecida como **Lazy Loading Cache**. Nessa abordagem:

- A aplicação verifica se os dados estão presentes no cache (Redis).
- Se **existirem**, os dados são retornados diretamente do cache.
- Se **não existirem**, os dados são buscados no banco de dados (PostgreSQL), armazenados no cache, e então retornados.

Essa técnica é simples e eficiente para cenários de leitura frequente com escrita eventual, permitindo controle total sobre quando e o que será armazenado no cache.

### 🗂️ Estrutura de Cache

Os seguintes padrões de chave são utilizados no Redis:

| Chave                               | Descrição                                         |
| ----------------------------------- | ------------------------------------------------- |
| `product:${uuid}`                   | Detalhes de um produto específico por ID (UUID)   |
| `products:all`                      | Lista completa de produtos (sem paginação)        |
| `products:all:limit:<n>:offset:<m>` | Lista paginada de produtos com `limit` e `offset` |
