import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {};

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleRegister}>Register</Button>
      </VStack>
    </Box>
  );
}

export default Register;
