import {SearchField, View} from '@aws-amplify/ui-react';

const SearchBox = () => {
    // const {tokens} = useTheme()
    return (
        <View as="div" marginTop="2rem">
            <SearchField
                label="Search"
                placeholder="Search here..."
                size="small"
                justifyContent="center"
                alignItems="center"
            />
        </View>
    )
}

export default SearchBox