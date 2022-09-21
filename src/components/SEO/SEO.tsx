import React from 'react'
import {useSiteMetadata} from "../../hooks/useSiteMetadata";

interface SEOProps {
    title?: string
    description?: string
    pathname?: string
}

const SEO = ({children, title, description, pathname}: React.PropsWithChildren<SEOProps>) => {
const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {children}
        </>
    )
}

export default SEO;