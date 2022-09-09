import {
    Collection, Card, Heading, Text, Image, View,
}
    from "@aws-amplify/ui-react";
import {categories} from "../../gallery-info";

const CardList = () => {
    return (
        <>
            <Collection items={categories} type="list"
                        direction="row"
                        gap={{base: '0', medium: '2rem'}}
                        wrap="wrap"
                        justifyContent="center" alignItems="center"
            >

                {(category, index) => (

                    <Card key={index} borderRadius="medium"
                          maxWidth={{medium: "22rem", large: "27rem"}}
                          marginTop="2.5rem" marginBottom="1.5rem" boxShadow="medium">
                        <Image alt={category.title} src={category.image} objectFit="cover"/>
                        <View as="div" maxWidth="100%">
                            <Heading level={4}>{category.title}</Heading>
                            <Text>{category.subtitle}</Text>
                        </View>


                    </Card>

                )}
            </Collection>
        </>
    )
}

export default CardList
