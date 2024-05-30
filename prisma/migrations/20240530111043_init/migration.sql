-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "name" STRING NOT NULL,
    "types" JSONB NOT NULL,
    "sprite" STRING NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
