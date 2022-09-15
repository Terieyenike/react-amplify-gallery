import { Badge, Link, Flex, Heading, Text, View } from '@aws-amplify/ui-react';

const Footer = () => {
  return (
    <>
      <Flex
        direction={{ base: 'column', medium: 'row' }}
        justifyContent={{ base: 'center', medium: 'space-between' }}
        alignItems='center'
        marginTop='1.5rem'>
        <View>
          <Flex
            direction='column'
            alignItems={{ base: 'center', medium: 'start' }}>
            <Heading color='neutral.90'>Image Gallery</Heading>
            <Text color='neutral.90' as='p'>
              Built with React.js and Amplify UI
            </Text>
          </Flex>
        </View>
        <Badge>
          <Link
            href='https://github.com/Terieyenike/react-amplify-gallery'
            isExternal={true}>
            GitHub
          </Link>
        </Badge>
      </Flex>
    </>
  );
};

export default Footer;
