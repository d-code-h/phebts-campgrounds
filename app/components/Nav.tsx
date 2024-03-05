import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server';

export default function Nav() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="text-3xl">
      {isAuthenticated() ? (
        <LogoutLink className="text-purple-500 font-semibold px-2 py-1 rounded-md ring-purple-500 hover:ring-2 focus:outline-none focus:ring-2">
          Log out
        </LogoutLink>
      ) : (
        <>
          <LoginLink className="text-purple-500 font-semibold px-2 py-1 rounded-md ring-purple-500 hover:ring-2 focus:outline-none focus:ring-2">
            Sign in
          </LoginLink>
          <RegisterLink className="text-purple-500 font-semibold px-2 py-1 rounded-md ring-purple-500 hover:ring-2 focus:outline-none focus:ring-2">
            Sign up
          </RegisterLink>
        </>
      )}
    </nav>
  );
}
