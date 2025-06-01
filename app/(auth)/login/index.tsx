import { View } from "tamagui";
import { LoginForm } from "@auth/components";

export default function LoginScreen() {
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });
    // Add actual login logic here
  };

  return (
    <View flex={1} justify="center" p="$4">
      <LoginForm onLogin={handleLogin} />
    </View>
  );
}
