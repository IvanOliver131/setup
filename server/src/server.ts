import Fastify from "fastify";

const app = Fastify();

// Get hello world
app.get("/", () => {
  return "Hello World";
});

app.listen({
  port: 3333,
});
