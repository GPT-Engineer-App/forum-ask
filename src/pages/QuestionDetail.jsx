import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function QuestionDetail() {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Heading>Question Title</Heading>
      <Text>Question details and comments...</Text>
    </Box>
  );
}

export default QuestionDetail;
