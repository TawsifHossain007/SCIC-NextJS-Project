export const authOptions = {
  providers: [
    // Only credentials provider for mock login
    {
      id: "credentials",
      name: "Mock Login",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        // 🔐 Hardcoded mock user
        if (
          credentials.email === "jake@gmail.com" &&
          credentials.password === "T@wsif"
        ) {
          return {
            _id: "mock-id",
            name: "Mock User",
            email: "jake@gmail.com",
            role: "user",
            Photo: "https://i.ibb.co.com/rRfMfjLS/Screenshot-18-1-2026-184921-www-google-com.jpg",
          };
        }
        return null; // Invalid credentials
      },
    },
  ],

  callbacks: {
    async signIn({ user }) {
      // Always allow mock user
      if (user.email === "jake@gmail.com") return true;
      return false;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },

    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.email = user.email;
        token.image = user.Photo;
      }
      return token;
    },
  },

  pages: {
    signIn: "/mock-login", // optional, if you have a page
  },
};
