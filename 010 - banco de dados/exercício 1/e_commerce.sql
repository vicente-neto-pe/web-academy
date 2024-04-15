CREATE DATABASE IF NOT EXISTS `e_commerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
SET default_storage_engine=InnoDB;

use e_commerce;

CREATE TABLE IF NOT EXISTS `cliente` (
  `cpf` VARCHAR(11) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `numero_celular` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`cpf`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)
);

CREATE TABLE IF NOT EXISTS `produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `estoque` INT NOT NULL,
  `nome`VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT NULL,
  `fabricante` VARCHAR(45) NULL DEFAULT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pais` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NULL DEFAULT NULL,
  `cidade` VARCHAR(45) NULL DEFAULT NULL,
  `rua` VARCHAR(100) NOT NULL,
  `cep` VARCHAR(8) NOT NULL,
  `cliente_cpf` VARCHAR(11) NOT NULL,
  `numero` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cliente_cpf`
    FOREIGN KEY (`cliente_cpf`)
    REFERENCES `cliente` (`cpf`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `forma_pagamento` VARCHAR(45) NOT NULL,
  `data_hora` DATETIME NOT NULL,
  `desconto` DECIMAL(5,2),
  `cliente_cpf` VARCHAR(11) NOT NULL,
  `endereco_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_compra_cliente_cpf`
    FOREIGN KEY (`cliente_cpf`)
    REFERENCES `cliente` (`cpf`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_compra_endereco_id`
    FOREIGN KEY (`endereco_id`)
    REFERENCES `endereco` (`id`)
);

CREATE TABLE IF NOT EXISTS `modelo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `produto_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_modelo_produto_id`
    FOREIGN KEY (`produto_id`)
    REFERENCES `produto` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `nr_serie` (
  `codigo` VARCHAR(100) NOT NULL,
  `modelo_id` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  CONSTRAINT `fk_nr_serie_modelo_id`
    FOREIGN KEY (`modelo_id`)
    REFERENCES `modelo` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `produto_modelo_nr_serie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `produto_id` INT NOT NULL,
  `modelo_id` INT NOT NULL,
  `nr_serie_codigo` VARCHAR(100) NULL DEFAULT NULL,
  `compra_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_produto_modelo_id`
    FOREIGN KEY (`modelo_id`)
    REFERENCES `modelo` (`id`),
  CONSTRAINT `fk_nr_serie_codigo`
    FOREIGN KEY (`nr_serie_codigo`)
    REFERENCES `nr_serie` (`codigo`),
  CONSTRAINT `fk_produto_id`
    FOREIGN KEY (`produto_id`)
    REFERENCES `produto` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_compra_id`
    FOREIGN KEY (`compra_id`)
    REFERENCES `compra` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `categoria_pai_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `categoria_categoria_pai_id_fkey` FOREIGN KEY (`categoria_pai_id`) REFERENCES `categoria` (`id`) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS `produto_categoria` (
  `produto_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`produto_id`, `categoria_id`),
  CONSTRAINT `fk_produto_categoria_produto_id`
    FOREIGN KEY (`produto_id`)
    REFERENCES `produto` (`id`),
  CONSTRAINT `fk_produto_categoria_categoria_id`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `categoria` (`id`)
);
