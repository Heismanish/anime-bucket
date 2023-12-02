import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/user") && token === null) {
        console.log("Hello");
        return false;
      }
      return true;
    },
  },
});
