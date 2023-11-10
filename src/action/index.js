const sendAction = () => {
  return{
    type: "send_type",
    value: "this is action"
  }
}

module.exports = {
  sendAction
};