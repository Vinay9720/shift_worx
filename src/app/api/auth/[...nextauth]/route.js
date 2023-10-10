import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const { data } = await axios.post(`${process.env.BASE_URL}/api/v1/users/sign_in`, credentials);
                    return {
                        email: data.email,
                        name: data.name,
                        token: data.authentication_token,
                        role: data.role,
                        id: data.id,
                    };
                } catch ({ response }) {
                    if (response.status === 401) throw new Error('unauthorized');
                }
            },
        }),
    ],

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },

    pages: {
        signIn: '/',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
