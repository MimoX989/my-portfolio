import { Button, Input, Spinner } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignupForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  // console.log(props.value);
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      console.log("asda");
      alert("Please check your email for verification! ");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  return (
    <form className="flex flex-col gap-3 border-4 border-double border-white p-4 w-full">
      <h3 className="text-amber-400">Signup</h3>
      <div className="m-2">
        <Input
          type="email"
          variant="underlined"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          isRequired
          label="Email"
          style={{ color: "azure", padding: "5px" }}
        />
        <Input
          type="password"
          variant="underlined"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          isRequired
          label="Password"
          style={{ color: "azure", padding: "5px" }}
        />
      </div>
      <Button isLoading={isLoading} type="button" onClick={handleSignUp}>
        Sign Up
      </Button>
    </form>
  );
}

export default SignupForm;
