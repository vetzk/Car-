-- CreateTable
CREATE TABLE `appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `appointmentDate` DATETIME(0) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `Appointments_fk1`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carModel` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `year` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carfeature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carId` INTEGER NOT NULL,
    `feature` VARCHAR(255) NOT NULL,
    `featureDesc` TEXT NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `carFeature_fk1`(`carId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carspec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carId` INTEGER NOT NULL,
    `battery` VARCHAR(255) NOT NULL,
    `range` VARCHAR(255) NOT NULL,
    `acceleration` VARCHAR(255) NOT NULL,
    `drive` VARCHAR(255) NOT NULL,
    `weight` VARCHAR(255) NOT NULL,
    `cargo` VARCHAR(255) NOT NULL,
    `wheels` VARCHAR(255) NOT NULL,
    `seating` VARCHAR(255) NOT NULL,
    `displays` VARCHAR(255) NOT NULL,
    `groundClearance` VARCHAR(255) NOT NULL,
    `overallWidth` VARCHAR(255) NOT NULL,
    `overallHeight` VARCHAR(255) NOT NULL,
    `overallLength` VARCHAR(255) NOT NULL,
    `trackFrontRear` VARCHAR(255) NOT NULL,
    `supercharging` VARCHAR(255) NOT NULL,
    `chargingSpeed` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `CarSpec_fk1`(`carId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `carId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `orderCode` VARCHAR(255) NOT NULL,
    `qty` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `transactionDate` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `Cart_fk1`(`carId`),
    INDEX `Cart_fk2`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `paymentMethod` VARCHAR(255) NOT NULL,
    `paymentDate` DATETIME(0) NOT NULL,
    `amount` INTEGER NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `Payment_fk1`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `carId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `reviewDesc` TEXT NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `Reviews_fk1`(`userId`),
    INDEX `Reviews_fk2`(`carId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identificationCode` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `role` VARCHAR(255) NOT NULL,
    `isEmailVerified` BOOLEAN NOT NULL DEFAULT false,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `twoFactorAuth` BOOLEAN NOT NULL DEFAULT false,
    `balance` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `identificationCode`(`identificationCode`),
    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `username`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userprofile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `imageProfile` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `dateOfBirth` DATETIME(0) NULL,
    `gender` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `id`(`id`),
    INDEX `UserProfile_fk1`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `appointments` ADD CONSTRAINT `Appointments_fk1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carfeature` ADD CONSTRAINT `carFeature_fk1` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carspec` ADD CONSTRAINT `CarSpec_fk1` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `Cart_fk1` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `Cart_fk2` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `Payment_fk1` FOREIGN KEY (`orderId`) REFERENCES `cart`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `Reviews_fk1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `Reviews_fk2` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `userprofile` ADD CONSTRAINT `UserProfile_fk1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
