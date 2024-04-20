import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10}>
        <Box as="header" py={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <Heading as="h1" size="xl">
              SecureCo
            </Heading>
            <HStack spacing={2}>
              <Button leftIcon={<Icon as={FaHome} />} colorScheme="teal" variant="ghost">
                Home
              </Button>
              <Button leftIcon={<Icon as={FaPhoneAlt} />} colorScheme="teal" variant="solid">
                Contact Us
              </Button>
              <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="outline">
                Email Us
              </Button>
            </HStack>
          </HStack>
        </Box>

        <Box as="section" py={10}>
          <VStack spacing={5}>
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNvbXBhbnl8ZW58MHx8fHwxNzEzNTk1NjMwfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Heading as="h2" size="lg">
              Your Safety, Our Priority
            </Heading>
            <Text fontSize="lg" textAlign="center">
              At SecureCo, we provide top-notch security solutions to ensure your safety and peace of mind. From residential to commercial security, trust us to protect what matters most to you.
            </Text>
          </VStack>
        </Box>

        <Box as="section" py={10}>
          <VStack spacing={8}>
            <Heading as="h3" size="md">
              Our Services
            </Heading>
            <HStack spacing={10}>
              <VStack spacing={3}>
                <Icon as={FaShieldAlt} w={10} h={10} color="teal.500" />
                <Text fontSize="md" fontWeight="bold">
                  24/7 Monitoring
                </Text>
                <Text textAlign="center">Continuous surveillance to ensure uninterrupted security.</Text>
              </VStack>
              <VStack spacing={3}>
                <Icon as={FaMapMarkedAlt} w={10} h={10} color="teal.500" />
                <Text fontSize="md" fontWeight="bold">
                  On-Site Patrol
                </Text>
                <Text textAlign="center">Dedicated personnel stationed at your premises for immediate response.</Text>
              </VStack>
              <VStack spacing={3}>
                <Icon as={FaShieldAlt} w={10} h={10} color="teal.500" />
                <Text fontSize="md" fontWeight="bold">
                  K9 Unit
                </Text>
                <Text textAlign="center">Highly trained security dogs for patrol and detection.</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        <Box as="footer" py={5}>
          <VStack spacing={3}>
            <Text fontSize="sm">© 2023 SecureCo. All rights reserved.</Text>
            <HStack spacing={2}>
              <Icon as={FaPhoneAlt} />
              <Text fontSize="sm">+1 234 567 8900</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaEnvelope} />
              <Text fontSize="sm">contact@secureco.com</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
