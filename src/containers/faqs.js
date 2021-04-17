import { OptForm, Accordion } from '../components';

import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqsData.map((item) => (
      <Accordion.Item key={item.id}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    ))}

    <OptForm>
      <OptForm.Input placeholder="Email address" />
      <OptForm.Button>Try it Now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
    </OptForm>
  </Accordion>
);

export default FaqsContainer;
