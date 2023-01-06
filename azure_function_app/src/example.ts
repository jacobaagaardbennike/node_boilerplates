const helloWorld = async (): Promise<string> => {
  const result = process.env.HELLO;
  return result;
};

export default helloWorld;
