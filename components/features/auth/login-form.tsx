import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        try {
          const res = await signIn("credentials", {
            ...Object.fromEntries(formData),
            redirect: false,
          });

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
        <input className="border border-(--border)" name="email" id="email" />
      </label>
      <label className="flex flex-col gap-2">
        Password
        <input
          className="border border-(--border)"
          name="password"
          id="password"
        />
      </label>
      <button type="submit">SingIn</button>
    </form>
  );
}
