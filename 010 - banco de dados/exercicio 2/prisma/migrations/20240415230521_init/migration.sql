-- CreateTable
CREATE TABLE `cliente` (
    `cpf` VARCHAR(11) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `numero_celular` VARCHAR(15) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `data_nascimento` DATE NOT NULL,

    UNIQUE INDEX `cliente_cpf_key`(`cpf`),
    UNIQUE INDEX `cliente_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `categoria_pai_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `fabricante` VARCHAR(45) NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `estoque` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(45) NOT NULL,
    `estado` VARCHAR(45) NOT NULL,
    `cidade` VARCHAR(45) NOT NULL,
    `cep` VARCHAR(8) NOT NULL,
    `rua` VARCHAR(100) NOT NULL,
    `numero` INTEGER NOT NULL,
    `cliente_cpf` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `forma_pagamento` VARCHAR(45) NOT NULL,
    `data_hora` DATETIME NOT NULL,
    `desconto` DOUBLE NOT NULL,
    `cliente_cpf` VARCHAR(191) NOT NULL,
    `endereco_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto_categoria` (
    `produto_id` INTEGER NOT NULL,
    `categoria_id` INTEGER NOT NULL,

    PRIMARY KEY (`produto_id`, `categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modelo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `produto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nr_serie` (
    `codigo` VARCHAR(100) NOT NULL,
    `modelo_id` INTEGER NOT NULL,

    UNIQUE INDEX `nr_serie_codigo_key`(`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto_modelo_nr_serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produto_id` INTEGER NOT NULL,
    `modelo_id` INTEGER NOT NULL,
    `compra_id` INTEGER NOT NULL,
    `nr_serie_codigo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categoria` ADD CONSTRAINT `categoria_categoria_pai_id_fkey` FOREIGN KEY (`categoria_pai_id`) REFERENCES `categoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_cliente_cpf_fkey` FOREIGN KEY (`cliente_cpf`) REFERENCES `cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_cliente_cpf_fkey` FOREIGN KEY (`cliente_cpf`) REFERENCES `cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_categoria` ADD CONSTRAINT `produto_categoria_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_categoria` ADD CONSTRAINT `produto_categoria_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modelo` ADD CONSTRAINT `modelo_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nr_serie` ADD CONSTRAINT `nr_serie_modelo_id_fkey` FOREIGN KEY (`modelo_id`) REFERENCES `modelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_modelo_nr_serie` ADD CONSTRAINT `produto_modelo_nr_serie_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_modelo_nr_serie` ADD CONSTRAINT `produto_modelo_nr_serie_modelo_id_fkey` FOREIGN KEY (`modelo_id`) REFERENCES `modelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_modelo_nr_serie` ADD CONSTRAINT `produto_modelo_nr_serie_nr_serie_codigo_fkey` FOREIGN KEY (`nr_serie_codigo`) REFERENCES `nr_serie`(`codigo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_modelo_nr_serie` ADD CONSTRAINT `produto_modelo_nr_serie_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
