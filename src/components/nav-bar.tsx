import Link from "next/link";
import { Icons } from "./icon";
import { buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import UserAccountNav from "./user-account-nav";

const NavBar = async () => {
  const session = await auth();

  return (
    <nav className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-x-zinc-300 z-10 py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* LOGO */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Devvit
          </p>
        </Link>

        {/* Search bar */}

        {/* Auth */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
