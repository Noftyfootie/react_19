console.log("Hello React");
console.log("Props");

const containerElem = chatMessagesRef.current;
if (containerElem) {
  containerElem.scrollTop = containerElem.scrollHeight;
}
