const textStyle = {
  fontSize: 20,
  fontStyle: "italic",
  marginBottom: 10,
  borderStyle: "groove",
  borderColor: "gray",
};

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div style={textStyle}>{message}</div>;
};

export default Notification;
