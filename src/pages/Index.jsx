import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Avatar, IconButton, Input, InputGroup, InputLeftElement, Button, useColorModeValue, Flex, Spacer, Heading, StackDivider } from "@chakra-ui/react";
import { FaBell, FaSearch, FaPlus, FaThumbsUp, FaComment } from "react-icons/fa";

const categories = ["General", "Technology", "Science", "Health", "Sports"];

const questions = [
  {
    id: 1,
    title: "How to learn React?",
    author: "John Doe",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzI0NzkxOXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "2 hours ago",
    likes: 10,
    comments: 5,
  },
  {
    id: 2,
    title: "What is Chakra UI?",
    author: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzI0NzkxOXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "1 day ago",
    likes: 8,
    comments: 3,
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" flexDirection="column">
        {/* Header */}
        <HStack bg={useColorModeValue("gray.100", "gray.900")} p={4} shadow="md">
          <Heading size="md" color="purple.500">
            Forum
          </Heading>
          <Spacer />
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" />
        </HStack>

        <Flex flex={1} overflow="hidden">
          {/* Sidebar */}
          <VStack w="250px" bg={useColorModeValue("gray.50", "gray.800")} p={4} spacing={4} align="stretch">
            {categories.map((category) => (
              <Button key={category} variant={selectedCategory === category ? "solid" : "ghost"} colorScheme="purple" onClick={() => setSelectedCategory(category)}>
                {category}
              </Button>
            ))}
            <Button leftIcon={<FaPlus />} colorScheme="purple" variant="solid">
              New Question
            </Button>
          </VStack>

          {/* Main Content */}
          <VStack flex={1} p={4} spacing={4} align="stretch" overflowY="auto">
            {questions.map((question) => (
              <Box key={question.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
                <HStack spacing={4}>
                  <Avatar src={question.avatar} />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{question.title}</Text>
                    <Text fontSize="sm" color="gray.500">
                      by {question.author} - {question.time}
                    </Text>
                  </VStack>
                </HStack>
                <HStack mt={4} spacing={4}>
                  <Button leftIcon={<FaThumbsUp />} variant="ghost" size="sm">
                    {question.likes}
                  </Button>
                  <Button leftIcon={<FaComment />} variant="ghost" size="sm">
                    {question.comments}
                  </Button>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
