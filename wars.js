const smach = ['Hello','world','this','is','great']

const Caught= (Caughtone, Caughttwo) => Caughtone + " "  + Caughttwo

console.log(smach.reduce(Caught))

module.exports = {
    Caught
}