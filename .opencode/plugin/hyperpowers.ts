import { definePlugin } from "@opencode-ai/plugin";

export default definePlugin((client) => {
  const touched = new Set<string>();

  client.on("file.edited", (event) => {
    if (event?.path) touched.add(event.path);
  });

  client.on("assistant.response", () => {
    if (touched.size > 5) {
      client.app.log("Consider committing your changes.");
    }
  });
});
