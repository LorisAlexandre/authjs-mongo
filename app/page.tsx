import { LoginButton, LogoutButton } from "@/components";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col p-10 gap-4 w-fit">
      <p>{session?.user?.name}, you are welcome to my boilerplate !</p>
      {session?.user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
