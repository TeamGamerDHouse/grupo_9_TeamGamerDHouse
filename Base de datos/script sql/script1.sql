-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gamerDhouse_db
-- -----------------------------------------------------
-- base de datos de Team Gamer DHouse

-- -----------------------------------------------------
-- Schema gamerDhouse_db
--
-- base de datos de Team Gamer DHouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gamerDhouse_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `gamerDhouse_db` ;

-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`genero` (
  `idgenero` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idgenero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(5) NOT NULL,
  `imagen` LONGBLOB NOT NULL,
  `genero_id` INT NULL,
  PRIMARY KEY (`idproducto`),
  UNIQUE INDEX `idproducto_UNIQUE` (`idproducto` ASC) ,
  INDEX `genero_id_idx` (`genero_id` ASC) ,
  CONSTRAINT `genero_id`
    FOREIGN KEY (`genero_id`)
    REFERENCES `gamerDhouse_db`.`genero` (`idgenero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`plataforma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`plataforma` (
  `idplataforma` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idplataforma`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`producto_x_plataforma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`producto_x_plataforma` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `producto_id` INT NOT NULL,
  `plataforma_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_producto_has_plataforma_plataforma1_idx` (`plataforma_id` ASC) ,
  INDEX `fk_producto_has_plataforma_producto1_idx` (`producto_id` ASC) ,
    FOREIGN KEY (`producto_id`)
    REFERENCES `gamerDhouse_db`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_has_plataforma_plataforma1`
    FOREIGN KEY (`plataforma_id`)
    REFERENCES `gamerDhouse_db`.`plataforma` (`idplataforma`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`direccion` (
  `id` INT NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`usuario` (
  `idusuario` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `direccion_id1` INT NOT NULL,
  PRIMARY KEY (`idusuario`),
  INDEX `fk_usuario_direccion1_idx` (`direccion_id1` ASC) ,
  CONSTRAINT `fk_usuario_direccion1`
    FOREIGN KEY (`direccion_id1`)
    REFERENCES `gamerDhouse_db`.`direccion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gamerDhouse_db`.`usuario_has_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gamerDhouse_db`.`usuario_has_producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_idusuario` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  `fecha` DATE NULL,
  `cantidad` INT NOT NULL,
  INDEX `fk_usuario_has_producto_producto1_idx` (`producto_idproducto` ASC) ,
  INDEX `fk_usuario_has_producto_usuario1_idx` (`usuario_idusuario` ASC) ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_usuario_has_producto_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `gamerDhouse_db`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_producto_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `gamerDhouse_db`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
