-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "video" TEXT,
    "duration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Film_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filmId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "image" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roleId" INTEGER NOT NULL,
    FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stars" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
