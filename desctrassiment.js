//practice about destrucment assisment

const Setting = {
    name:'Felipe programmer',
    sobrename:'martins',
    aplilaide:'gikaaaaaaaa'
}

const {name, sobrename} = Setting
console.log(Setting.aplilaide)

const More = {
    brandone: 'nike',
    brandtwo: 'addidas',
    brandthree:'puma'
}

const {brandone , brandthree } = More
console.log(More.brandone, brandthree)




const laught ={
    trademarks:'Facebook',
    trademarksone: 'twitter'
}

const Phase = `is bad ${laught.trademarks} net social, always prefer net ${laught.trademarksone}
is much better always`
console.log(Phase)

const {seeing, seeingset} = laught
console.log(laught.trademarks, laught.trademarksone)




const getNamesOther = {
    nametwo: "martins",
    giveitall: "always",
    thebestoftwo:"nop"
}

const { nametwo, giveitall } = getNamesOther 
console.log( getNamesOther.nametwo)



const ComeBackHereNow = {kinda:'martins',age:24, martins:'Felipe pé de anjo'}
const {kinda, martins}= ComeBackHereNow
console.log(ComeBackHereNow.martins, ComeBackHereNow.kinda)