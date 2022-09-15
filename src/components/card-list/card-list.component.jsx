import {
  Collection,
  Card,
  Heading,
  Text,
  Image,
  View,
  Flex,
} from '@aws-amplify/ui-react';
import { categories } from '../../gallery-info';

const CardList = () => {
  return (
    <>
      <Collection
        type='list'
        direction='row'
        gap={{ base: '0', medium: '2rem' }}
        wrap='wrap'
        justifyContent='center'
        alignItems='center'
        items={Object.values(categories).map(({ title, subtitle, image }) => ({
          title,
          subtitle,
          image,
        }))}
        isSearchable
        searchNoResultsFound={
          <Flex justifyContent='center'>
            <Text color='purple.80' fontSize='1rem'>
              Nothing found, please try again
            </Text>
          </Flex>
        }
        searchPlaceholder='Search here...'
        searchFilter={(category, keyword) =>
          category.title.toLowerCase().startsWith(keyword.toLowerCase())
        }>
        {(category, index) => (
          <Card
            key={index}
            borderRadius='medium'
            maxWidth={{ medium: '22rem', large: '27rem' }}
            marginTop='2.5rem'
            marginBottom='1.5rem'
            boxShadow='medium'>
            <Image
              alt={category.title}
              src={category.image}
              objectFit='cover'
            />
            <View as='div' maxWidth='100%'>
              <Heading level={4}>{category.title}</Heading>
              <Text>{category.subtitle}</Text>
            </View>
          </Card>
        )}
      </Collection>
    </>
  );
};

export default CardList;
