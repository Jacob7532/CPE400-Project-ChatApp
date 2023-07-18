const chatHeader = document.querySelector('.title')
const chatMessages = document.querySelector('.messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatButton = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const chatMessageElement = (message) => `
    <div class="message ${message.sender === 'You' ? 'you' : 'them'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-time">${message.time}</div>
    </div>
`

window.onload = () => {
    messages.forEach(message => {
        chatMessages.innerHTML += chatMessageElement(message)
    })
}

let messageSender = 'You'

const changeSender = (e) => {
    messageSender = e.target.innerText
    chatHeader.innerText = `Chatting as ${messageSender}`
}

const sendMessage = (e) => {
    e.preventDefault()

    const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
    const message = {
        sender: messageSender,
        text: chatInput.value,
        time
    }

    messages.push(message)
    localStorage.setItem('message', JSON.stringify(message))
    chatMessages.innerHTML += chatMessageElement(message)

    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatButton.addEventListener('click', () => {
    localStorage.clear()
    chatMessages.innerHTML = ''
})