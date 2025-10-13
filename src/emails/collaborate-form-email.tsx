import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface CollaborateFormEmailProps {
  name: string;
  email: string;
  expertise: string;
  message?: string;
}

export function CollaborateFormEmail({
  name,
  email,
  expertise,
  message,
}: CollaborateFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New collaboration inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>New Collaboration Inquiry</Heading>
            <Hr style={hr} />
            <Text style={paragraph}>
              You have a new inquiry to become a foundational partner at Axion Ventures.
            </Text>
            <Text style={paragraph}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={hr} />
            <Heading as="h2" style={subHeading}>Interest / Expertise</Heading>
            <Text style={paragraph}>{expertise}</Text>
            
            {message && (
                <>
                    <Hr style={hr} />
                    <Heading as="h2" style={subHeading}>Additional Message</Heading>
                    <Text style={paragraph}>{message}</Text>
                </>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const subHeading = {
    fontSize: '18px',
    lineHeight: '1.3',
    fontWeight: '600',
    color: '#484848',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#525f7f',
};
