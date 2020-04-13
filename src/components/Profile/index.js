import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
        site: {siteMetadata : {title, position, description}}
    } = useStaticQuery(graphql`
        query MySiteMetadata{
            site{
                siteMetadata{
                    title
                    description
                    position
                }
            }
        }
    `)

    return(
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                {title}
                <S.ProfilePosition><h2>{position}</h2></S.ProfilePosition>
                </S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
            </S.ProfileLink>
        </S.ProfileWrapper>
    )
}


export default Profile