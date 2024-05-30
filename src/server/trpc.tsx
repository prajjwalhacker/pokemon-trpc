import { initTRPC } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '../../prisma/db';
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<typeof createContextInner>().create();
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;


import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";

export async function createContextInner(opts?: trpcNext.CreateNextContextOptions) {
const prisma = new PrismaClient();

return { prisma, opts };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;