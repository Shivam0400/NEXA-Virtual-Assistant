let btn=document.querySelector("#btn");
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("what's your name")){
        speak("My name is your Nexa") 
        }
    else if(message.includes("hello") ||message.includes("hey")){
        speak("Hello Sir, How can I help You?")
    }
    else if(message.includes("who are you")){
        speak("I am your virtual assistant, created by Shivam Sir. I can help you with anything you want")
    }
    else if(message.includes("Open Youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("Open Linkedin")){
        speak("Opening Linkedin")
        window.open("https://www.linkedin.com","_blank")
    }
    else if(message.includes("Open Google")){
        speak("Opening Google")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("Open Facebook")){
        speak("Opening Facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("Open Instagram")){
        speak("Opening Instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("Open Chatgpt")){
        speak("Opening Chatgpt")
        window.open("https://chat.openai.com","_blank")
    }
    else if(message.includes("Open Calculator")){
        speak("Opening Calculator")
        window.open("calculator://")
    }
    else if(message.includes("Open Camera")){
        speak("Opening Camera")
        window.open("Camera://")
    }
    else if(message.includes("Open Pintrest")){
        speak("Opening pintrest")
        window.open("pinterest://")
    }
    else if(message.includes("Open whatsapp")){
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    // else{
    //     speak('this is what i found on internet regarding ${message.replace("Nexa","")',"_blank")
    //     window.open('https://www.google.com/search?q=${message}')
    //     }
        else {
            speak(`This is what I found on the internet regarding ${message.replace("Nexa", "")}`);
            window.open(`https://www.google.com/search?q=${message}`, "_blank");
        }
}
