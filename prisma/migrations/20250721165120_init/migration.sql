-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_uuid_key" ON "Produto"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_uuid_key" ON "Categoria"("uuid");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
