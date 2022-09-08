const {gql} = require('apollo-server');
//带标签的模板文字，用于包装 GraphQL 字符串，例如我们即将编写的模式定义。
const typeDefs = gql`
    # Schema definitions go here

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        spaceCats:[spaceCats!]!
    }
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }
    type spaceCats{
        name: String!
        age:String!
        missions:[mission]
    }
    type mission{
        name:String!
        description:String
    }
`;
module.exports = typeDefs;
