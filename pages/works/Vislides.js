import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Vi-SlideS">
    <Container>
      <Title>
        Vi-SlideS <Badge>2026</Badge>
      </Title>
      <P>
        Vi-SlideS is an advanced, AI-powered classroom platform designed to transform live teaching into a more interactive, data-driven experience. It bridges the gap between teachers and students by providing real-time insights into student understanding and sentiment.
      </P>
      <br></br>
      <P>
        The platform features a dual-interface system: a dynamic Teacher Dashboard that displays live student engagement metrics, sentiment analysis, and topic mastery levels, and a Student Interface that allows students to interact with the content, ask questions, and receive instant feedback.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Medatarunvenkat/Vi-SlideS">
            Vi-SlideS <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js, MongoDB, Express</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/imgg1.png" alt="Vi-SlideS" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
