import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mt={10} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="Vislides"
            title="Vi-SlideS"
            thumbnail="/images/works/imgg2.png"
          >
            An AI-powered classroom platform for real-time student engagement and sentiment analysis.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="handgesture" thumbnail="/images/works/img1.png" title="Hand Gesture Recognition">
            A browser-based application that converts hand gestures into text in real time using MediaPipe and computer vision.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
