import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../../../../server/routers/_app';
import { createContextInner } from '@/server/trpc';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters




const handler  = (req) => {
    return fetchRequestHandler({
      endpoint: "/api/trpc",
      router: appRouter,
      createContext: createContextInner,
      req,
    })
}

export {  handler as GET, handler as POST}



