import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
    apiKey : "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",
});

import * as dotenv from "dotenv";
dotenv.config();
const response = await model.invoke("Harshitha");
console.log(response)