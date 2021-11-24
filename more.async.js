
// i create a function that called in the another function!!!
const wakeup = wake => new Promise (resolve => {
    setTimeout(resolve, wake)
})

const regret = async () =>{
    console.log('resolve issues called!!!')
    await wakeup (2000)
    console.log('resolvido all issues yep!!!')
    await wakeup(3000)
    console.log('Im learning practice about async and promises')
}

regret()


const Remeber = rem => new Promise (resolve => {
    setTimeout(resolve, rem)
})

//remember more an time new promise and async!!
const sleep =async () => {
   console.log('more and practice about threads advantage')
   await Remeber(2000)

}

sleep()