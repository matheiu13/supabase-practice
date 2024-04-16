import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export function LoginWithGithubBtn() {
  const supabase = createClient();
  const signInWithGithub = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
      console.log(error);

      if (error) {
        throw new Error(error.message);
      }

      // Redirect or handle successful login
      redirect("/protected"); // Redirect to protected page upon successful login
    } catch (error: any) {
      console.error("GitHub OAuth error:", error.message);
      redirect("/login?message=Failed to sign in with GitHub");
    }
  };

  return <button onClick={signInWithGithub}></button>;
}
