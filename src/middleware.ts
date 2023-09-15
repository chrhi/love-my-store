export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin/:path*"] };

// export default function middleware() {
//   //todo handle that later
// }
