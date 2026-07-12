interface ImportMetaEnv {
    readonly PUBLIC_CONTACT_EMAIL: string;
    readonly CV_DOWNLOAD_URL: string;
    readonly PUBLIC_DEV_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
