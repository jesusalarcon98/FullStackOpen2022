const textStyle = {
  color: "gray",
  fontSize: 20,
  fontStyle: "italic",
  
};

const Notification = ({ message }) => {
  console.log(message);
  if (message === null) {
    return null;
  }
  return <div style={textStyle}>{message}</div>;
};

export default Notification;
