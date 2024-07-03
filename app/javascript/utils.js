const scrollBottom = () => {
   let messagesDiv = $('#messages');
   if (messagesDiv.length > 0) {
      messagesDiv.scrollTop(messagesDiv[0].scrollHeight)
   }
}

export { scrollBottom };