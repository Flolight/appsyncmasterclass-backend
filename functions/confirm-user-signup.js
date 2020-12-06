const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient()

const { USER_TABLE } = process.env

module.exports.handler = async (event) => {
    if (event.triggerSource === 'PostConfirmation_ConfirmSignUp') {
        const name = event.request.userAttributes['name']
        const user = {
            id: event.userName,
            name,
            // screenName:
            // birthDate:
            createdAt: new Date().toJSON(),
            followersCount: 0,
            followingCount: 0,
            tweetsCount: 0,
            likesCounts: 0
        }
        await DocumentClient.put({
            TableName: USER_TABLE,
            Item: user,
            ConditionExpression: 'attribute_not_exists(id)'
        }).promise()
        return event
    } else {
        return event
    }

}