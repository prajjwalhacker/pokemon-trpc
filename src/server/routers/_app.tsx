import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure
    .input(
      z.array(z.string())
    )
    .query(async (opts) => {
     const res = await opts.ctx.prisma.pokemon.findMany({where: {
      name: {
        in: opts.input,
      }, 
    }});
     return res;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;