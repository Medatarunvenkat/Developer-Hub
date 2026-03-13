import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Hand Gesture Recognition">
    <Container>
      <Title>
        Hand Gesture Recognition <Badge>2025</Badge>
      </Title>
      <P>
        The Hand Gesture Recognition System is a browser-based application that converts hand gestures into text in real time using MediaPipe and computer vision.
        It detects hand landmarks from the camera, recognizes gestures, and converts them into characters with about 95% accuracy at 30+ FPS.
      </P>
      <br></br>
      <P>
        The system also supports text-to-speech, automatic session saving, and works without installation directly in modern web browsers.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MediaPipe Hands, Javascript, Web Speech API, Web Camera API, HTML, CSS</span>
        </ListItem>

      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/img2.png" alt="handgesture" />
      <WorkImage src="/images/works/img3.png" alt="handgesture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
