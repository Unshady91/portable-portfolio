import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
  Text,
  Box,
  Image
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
import logo from '../img/icons/logo@32.png'

export default function Nav({ color }) {
  const profile = ProfileArray();
  const colors = {
    "blue": "#3182CE",
    "cyan": "#00B5D8",
    "gray": "#718096",
    "green": "#38A169",
    "orange": "#DD6B20",
    "pink": "#D53F8C",
    "purple": "#805AD5",
    "red": "#E53E3E",
    "teal": "#319795",
    "yellow": "#D69E2E"
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialScrollTopValue = 80;

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > initialScrollTopValue || document.documentElement.scrollTop > initialScrollTopValue
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <HStack>
          <Link onClick={scrollToHero}>
            <Box>
              <Image src={logo} alt='Логотип' />
            </Box></Link>
          <Text
            fontWeight="500"
            color={colorMode === "light" ? color.teal : color.blue}>
              Разработка веб-приложений
          </Text>
        </HStack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToAbout}>
                  Инфо
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  Квалификация
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  Проекты
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Контакты
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        Инфо
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        Квалификация
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        Проекты
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Контакты
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
