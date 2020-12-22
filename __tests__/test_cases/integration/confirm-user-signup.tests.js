const given = require('../../steps/given')
const when = require('../../steps/when')
const then = require('../../steps/then')
const chance = require('chance').Chance()

describe('When confirmUserSignUp runs', () => {
    it("The userProfile should be saved in DynamoDB", async () => {
        const { name, email } = given.a_radom_user()
        const userName = chance.guid()

        await when.we_invoke_confirmUserSignup(username, name, email)

        const ddBUser = await then.user_exists_in_UsersTable(username)
        expect(ddBUser).toEqual({

        })
    })
})