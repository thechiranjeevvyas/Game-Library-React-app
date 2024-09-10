function Message() {
  const name = "CV";
  if (name) return <h1>Welcome {name}</h1>;
  return <h1>Not Welcomed</h1>;
}

export default Message;
