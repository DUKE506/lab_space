import { Input } from "@/components/ui/input";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function LoginForm() {
  return (
    <form
      className="flex flex-col gap-6"
      action={async (formData) => {
        "use server";
        try {
          // const res = await signIn("credentials", {
          //   ...Object.fromEntries(formData),
          //   redirect: false,
          // });

          redirect("/dashboard");
        } catch (err) {
          if (err instanceof AuthError) {
            console.log(err);
            return redirect("/signin?error=unknown");
          }
          throw err;
        }
      }}
    >
      <label className="flex flex-col gap-2">
        Email
        <Input name="email" id="email" />
      </label>
      <label className="flex flex-col gap-2">
        Password
        <Input name="password" id="password" />
      </label>
      <button
        className=" w-full py-2 font-bold  border border-(--border) rounded-(--default-rounded) cursor-pointer hover:border-(--primary) hover:text-(--primary) "
        type="submit"
      >
        sign in
      </button>
    </form>
  );
}
