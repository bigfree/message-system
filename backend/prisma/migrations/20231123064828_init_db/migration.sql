-- CreateEnum
CREATE TYPE "UserContactStatus" AS ENUM ('ACTIVE', 'PENDING', 'UNACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "UserGroupStatus" AS ENUM ('ACTIVE', 'PENDING', 'UNACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "UserContactType" AS ENUM ('SMS', 'EMAIL');

-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('CREATED', 'PROCESS', 'DONE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "avatar" VARCHAR(255),
    "acronym" VARCHAR(2),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContact" (
    "id" TEXT NOT NULL,
    "contactType" "UserContactType" NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "status" "UserContactStatus" NOT NULL DEFAULT 'ACTIVE',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "prefix" VARCHAR(255),
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "createdUserId" TEXT NOT NULL,
    "messageTypeId" TEXT NOT NULL,
    "status" "MessageStatus" DEFAULT 'CREATED',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageType" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(400),
    "color" VARCHAR(20),
    "createdUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MessageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "status" "UserGroupStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroupContact" (
    "id" TEXT NOT NULL,
    "contactType" "UserContactType" NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "status" "UserContactStatus" NOT NULL,
    "uerGroupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserGroupContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroupSettings" (
    "id" TEXT NOT NULL,
    "userGroupId" TEXT NOT NULL,
    "description" VARCHAR(500),
    "color" VARCHAR(20),
    "avatar" VARCHAR(255),

    CONSTRAINT "UserGroupSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Queue" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userContactId" TEXT NOT NULL,
    "jobId" INTEGER,
    "status" VARCHAR(20),
    "failedReason" VARCHAR(400),
    "enqueueAt" TIMESTAMP(3),
    "attempt" INTEGER,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "Queue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "data" JSON,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssignUsersOnMessage" (
    "userId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssignUsersOnMessage_pkey" PRIMARY KEY ("userId","messageId")
);

-- CreateTable
CREATE TABLE "AssignUserGroupOnMessage" (
    "userGroupId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssignUserGroupOnMessage_pkey" PRIMARY KEY ("userGroupId","messageId")
);

-- CreateTable
CREATE TABLE "_AssignUserOnUserGroup" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserContact_value_key" ON "UserContact"("value");

-- CreateIndex
CREATE UNIQUE INDEX "MessageType_name_key" ON "MessageType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_name_key" ON "UserGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroupContact_value_key" ON "UserGroupContact"("value");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroupSettings_userGroupId_key" ON "UserGroupSettings"("userGroupId");

-- CreateIndex
CREATE INDEX "Queue_userId_userContactId_jobId_idx" ON "Queue"("userId", "userContactId", "jobId");

-- CreateIndex
CREATE UNIQUE INDEX "_AssignUserOnUserGroup_AB_unique" ON "_AssignUserOnUserGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_AssignUserOnUserGroup_B_index" ON "_AssignUserOnUserGroup"("B");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContact" ADD CONSTRAINT "UserContact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageTypeId_fkey" FOREIGN KEY ("messageTypeId") REFERENCES "MessageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageType" ADD CONSTRAINT "MessageType_createdUserId_fkey" FOREIGN KEY ("createdUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupContact" ADD CONSTRAINT "UserGroupContact_uerGroupId_fkey" FOREIGN KEY ("uerGroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupSettings" ADD CONSTRAINT "UserGroupSettings_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_userContactId_fkey" FOREIGN KEY ("userContactId") REFERENCES "UserContact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignUsersOnMessage" ADD CONSTRAINT "AssignUsersOnMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignUsersOnMessage" ADD CONSTRAINT "AssignUsersOnMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignUserGroupOnMessage" ADD CONSTRAINT "AssignUserGroupOnMessage_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignUserGroupOnMessage" ADD CONSTRAINT "AssignUserGroupOnMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignUserOnUserGroup" ADD CONSTRAINT "_AssignUserOnUserGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignUserOnUserGroup" ADD CONSTRAINT "_AssignUserOnUserGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "UserGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
