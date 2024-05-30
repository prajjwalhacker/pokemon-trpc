import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  multiplePokemon: procedure
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
  singlePokemon: procedure.input(z.string()).query(async (opts) => {
    const res = await opts.ctx.prisma.pokemon.findFirst({
      where: {
        name: opts.input,
      }
    })
    return res;
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;