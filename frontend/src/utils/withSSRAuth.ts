import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { getSession } from 'next-auth/client';

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
) {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession(context);

    if (!session?.user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    try {
      return await fn(context);
    } catch (err) {
      if (err) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}
