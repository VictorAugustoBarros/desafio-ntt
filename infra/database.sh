#!/bin/sh

echo "🏗️ Rodando migrations..."
docker exec -it ntt-data-backend npx prisma migrate deploy

echo "🌱 Rodando seed..."
docker exec -it ntt-data-backend npm run seed

echo "✅ Backend iniciado com banco migrado e dados inseridos."
