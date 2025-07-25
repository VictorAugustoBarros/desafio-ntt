## ✅ Campos que devem ser incluídos no README

### 1. **Introdução**

- Breve explicação sobre o projeto e o objetivo do desafio.
- Menção das stacks usadas: Next.js (frontend), NestJS (backend), PostgreSQL e Redis (infra via Docker).

### 2. **Tecnologias Utilizadas**

- Listagem das tecnologias separadas por categoria (Frontend, Backend, Infraestrutura).

### 3. **Estrutura do Projeto**

- Mapa de diretórios:

  ```bash
  /frontend
  /backend
  /infra
  /docs
  ```

### 4. **Como Executar o Projeto**

- Comando principal:

```bash
docker compose -f infra/infrastructure.yml up -d
```

```bash
  docker compose -f infra/infrastructure.yml up -d
```

- Informar as portas expostas:

  | Serviço    | Porta  |
  | ---------- | ------ |
  | Frontend   | `3001` |
  | Backend    | `3000` |
  | Redis      | `6379` |
  | PostgreSQL | `5432` |

### 5. **Variáveis de Ambiente**

- Explicação sobre onde e como configurar `.env` (tanto no frontend quanto no backend).
- Exemplo de variáveis para o banco de dados, Redis, etc.

### 6. **Endpoints Disponíveis**

Com base no desafio:

#### `/products`

- `GET /products`: lista todos os produtos.
- `GET /products/:id`: retorna um produto por ID.
- `POST /products`: cria um novo produto.
- `PUT /products/:id`: atualiza um produto existente.
- `DELETE /products/:id`: remove um produto.

#### `/categories`

- `GET /categories`: lista todas as categorias.
- `GET /categories/:id`: retorna uma categoria por ID.
- `POST /categories`: cria uma nova categoria.
- `PUT /categories/:id`: atualiza uma categoria existente.
- `DELETE /categories/:id`: remove uma categoria.

### 7. **Acesso ao Swagger (Documentação da API)**

Localização da documentação da API:

http://localhost:3000/api/docs
