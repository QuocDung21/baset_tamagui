import { useState } from "react";
import {
  YStack,
  Input,
  Text,
  Button,
  XStack,
  CheckboxProps,
  Checkbox,
  Label,
} from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      onLogin?.(email, password);
    }
  };

  return (
    <YStack gap="$4" p="$4">
      <Text fontSize="$6" fontWeight="bold">
        Login
      </Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CheckboxWithLabel size="$4" defaultChecked />
      <Button onPress={handleLogin} disabled={!email || !password}>
        Login
      </Button>
    </YStack>
  );
}
export function CheckboxWithLabel({
  size,
  label = "Accept terms and conditions",
  ...checkboxProps
}: CheckboxProps & { label?: string }) {
  const id = `checkbox-${(size || "").toString().slice(1)}`;
  return (
    <XStack gap="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
