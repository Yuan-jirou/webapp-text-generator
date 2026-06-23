declare module 'dify-client';
declare module 'uuid';

declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_APP_ID?: string;
        NEXT_PUBLIC_APP_KEY?: string;
        NEXT_PUBLIC_API_URL?: string;
    }
}

declare var process: NodeJS.Process;

declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_APP_ID?: string;
        NEXT_PUBLIC_APP_KEY?: string;
        NEXT_PUBLIC_API_URL?: string;
    }
}

declare var process: NodeJS.Process;
