import React from 'react'
import { Helmet } from 'react-helmet';

const MetaDataProvider = (props) => {
    return (
        <Helmet {...props} />
    )
}

export default MetaDataProvider;

MetaDataProvider.defaultProps = {
    title: "Page"
}