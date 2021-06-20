import NextAuth from 'next-auth';
import { session } from 'next-auth/client';
import Providers from 'next-auth/providers';
import { createPlayer, getPlayer } from '../../../services/api/player';
import { getPlayerNick } from '../../../utils/getPlayerNick';
import { getPlayerId } from '../../../utils/getPlayerId';

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
    async session(session, user) {
      try {
        const player = await getPlayer(
          getPlayerId(session.user.email, 'google'),
        );

        return { ...session, playerId: player.data.id };
      } catch {
        return { ...session, playerId: null };
      }
    },
    async signIn(user, account, profile) {
      try {
        await createPlayer({
          avatar: user.image,
          playerId: getPlayerId(user.email, account.provider),
          provider: account.provider,
          nick: getPlayerNick(user.name),
        });
      } catch (err) {
        // se o usuário não existe retorna
          throw new Error(err);
      }

      return true;
    },
  },
});
