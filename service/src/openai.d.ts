declare module 'openai' {
    class OpenAI {
        constructor(config: { apiKey: string, baseURL?: string });

        chat: {
            completions: {
                create: (options: {
                    model: string,
                    messages: { role: string, content: string }[]
                }) => Promise<{ choices: { message: { content: string } }[] }>
            }
        };
    }

    export default OpenAI;
}
