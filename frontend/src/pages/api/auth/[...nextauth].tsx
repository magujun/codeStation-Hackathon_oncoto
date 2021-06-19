import NextAuth from 'next-auth';
import { session } from 'next-auth/client';
import Providers from 'next-auth/providers';
import { createPlayer, getPlayer } from '../../../services/player';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  jwt: {
    signingKey: process.env.JWTSIGNIN_KEY,
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session(session) {
      try {
        const player = await getPlayer(
          session.user.email.replace('@gmail.com', ''),
        );

        return { ...session, playerId: player.data[0].id };
      } catch {
        return { ...session, playerId: null };
      }
    },
    async signIn(user, account, profile) {
      try {
        const resp = await getPlayer(user.email.replace('@gmail.com', ''));

        if (!resp.data.id) {
          await createPlayer({
            avatar: user.image,
            playerId: user.email.replace('@gmail.com', ''),
            provider: account.provider,
            nick: user.name.split(' ')[0] ?? user.name,
          });
        }
      } catch (err) {
        // se o usuário não existe retorna
        if (err.response.status === 404) {
          const player = await createPlayer({
            avatar: user.image,
            playerId: user.email.replace('@gmail.com', ''),
            provider: account.provider,
            nick: user.name.split(' ')[0] ?? user.name,
          });
        }
      }

      return true;
    },
  },
});
