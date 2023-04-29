import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Footer({color}) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© 2023 Азамат Молдашев. Разработчик веб-приложений</Text>
        <Text>Сайт собран c помощью проекта <Link href="https://github.com/eldoraboo/portable-portfolio" isExternal color={color}>eldoraboo</Link></Text>
      </Container>
    </Box>
  );
}
