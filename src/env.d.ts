interface ImportMetaEnv {
  readonly FUNCTION_APP_URI: string;
  readonly X_FUNCTIONS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}