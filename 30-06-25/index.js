

document.body.style.border = "2px solid black"
document.body.style.padding = "5px"


const h1 = document.querySelector(".gg")
const p = document.querySelector(".pp")

const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")

const perform = () => {
    h1.textContent = ""
    p.textContent = ""
    document.body.style.border = "none"
}

button2.addEventListener("click", perform)

const whatToDo = () => {
    h1.textContent = " Title: The Midnight Sun"
    h1.style.color = " navy blue"
    p.textContent = " SAVOUR: But with Soji its different right? With him there's no fear,no lingering threat in the dark. With him there's security,there's safety.He's not just a man- he's your brother,the one who stands between you and the world,who shields you from the chaos that tries to seep in. With Soji,you dont have to keep your guard up. You can just be. Your little reminder that some can be protectors in a world where  men are destroyers. Soji is your proof that even in a world that feels so unsafe there are still people that would fight for you,who would stand by you no matter what.He's the calm in the storm,the steady hand that holds yours when it feels like everything else is falling apart. Find your Soji."
    p.style.color = " black"
    p.style.fontSize = " 18px"

    document.body.style.border = "2px solid black"
    document.body.style.padding = "5px"
}
button1.addEventListener("click", whatToDo)
