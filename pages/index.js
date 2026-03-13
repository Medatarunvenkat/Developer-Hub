import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a CSE undergraduate at GCET!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Meda Tarun Venkat
          </Heading>
          <p>3rd year B.Tech. CSE undergrad (Full Stack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            boxShadow="0 0 15px rgba(49, 151, 149, 0.6)"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hello! 👋 I am Meda Tarun Venkat a 3rd year Computer Science undergrad at Geethanjali College of Engineering and Technology (GCET), Hyderabad.
          I enjoy taking complex problems and turning them into simple and beautiful webpages, I also love the logic and structure of coding
          and always strive to write elegant and efficient code whether it be React, Next-JS, Java.
          <br></br>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Box display="flex" flexWrap="wrap" gap={3}>
          <Badge colorScheme="teal" variant="subtle" p={1} borderRadius="md">React</Badge>
          <Badge colorScheme="purple" variant="subtle" p={1} borderRadius="md">Next.js</Badge>
          <Badge colorScheme="green" variant="subtle" p={1} borderRadius="md">Node.js</Badge>
          <Badge colorScheme="yellow" variant="subtle" p={1} borderRadius="md">JavaScript</Badge>
          <Badge colorScheme="blue" variant="subtle" p={1} borderRadius="md">Python</Badge>
          <Badge colorScheme="orange" variant="subtle" p={1} borderRadius="md">Java</Badge>
          <Badge colorScheme="red" variant="subtle" p={1} borderRadius="md">C++</Badge>
          <Badge colorScheme="facebook" variant="subtle" p={1} borderRadius="md">MongoDB</Badge>
          <Badge colorScheme="pink" variant="subtle" p={1} borderRadius="md">Express</Badge>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Born in Hyderabad, India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Started B.tech. in Computer Science at GCET, Hyderabad
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Online Games</text>{' '}
          , <text style={{ color: "pink" }}>Treking</text>,{' '}Wed-Dev
        </Paragraph>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in Touch
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:medatarunvenkat@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                medatarunvenkat@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Medatarunvenkat" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Medatarunvenkat
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/tarun-meda-91b71b307/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Tarun Venkat Meda
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/Medatarunvenkat/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Medatarunvenkat
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/resume.pdf" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
