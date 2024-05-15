import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "@/../auth";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button className="border" {...props}>サインイン</Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        console.log("hoge");
        await signOut();
      }}
    >
      <Button
        type="submit"
        variant="ghost"
        className="w-full p-1 border"
        {...props}
      >
        サインアウト
      </Button>
    </form>
  );
}
