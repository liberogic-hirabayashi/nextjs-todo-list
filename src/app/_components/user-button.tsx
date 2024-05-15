import { Button } from "./ui/button";
import {
  DropdownMenu,
} from "./ui/dropdown-menu";
import { SignIn, SignOut } from "./auth-components";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "../../auth";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn provider="github" />;

  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex"></span>
      <SignOut />
      <DropdownMenu>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            {session.user.image && (
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={session.user.image}
                />
              </Avatar>
            )}
          </Button>
          <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
      </DropdownMenu>
    </div>
  );
}
